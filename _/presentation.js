// Mode présentation : transforme le contenu déjà rendu d'une page de cours
// en diaporama reveal.js, sans dupliquer le rendu markdown (admonitions,
// video/audio, mermaid, MathJax, tabs sont réutilisés tels quels).

(function () {
  "use strict";

  // Le plugin material/offline force use_directory_urls à false (nécessaire
  // pour parcourir le site en local via file://), donc les pages sont
  // servies en URLs plates ("c1.html"), pas en URLs de type dossier
  // ("c1/"). On accepte les deux formes au cas où la config changerait.
  const COURSE_FOLDERS =
    "582-312–video2|582-121–illustration-numerique|582-101–domaines-multimedias";
  const COURSE_SESSION_RE = new RegExp(
    `/(?:${COURSE_FOLDERS})/(c\\d+|cours\\d+(?:_[a-z0-9]+)?)(?:\\.html|/(?:index\\.html)?)?(?:[?#].*)?$`,
    "i"
  );

  const isCourseSessionPage = (pathname) => {
    // location.pathname pourcent-encode les caractères non-ASCII (le tiret
    // demi-cadratin de "582-312–video2" devient %E2%80%93) — on décode avant
    // de tester la regex, qui contient le caractère littéral.
    let decoded = pathname;
    try {
      decoded = decodeURIComponent(pathname);
    } catch (e) {
      // séquence % invalide dans l'URL : on retombe sur la valeur brute
    }
    return COURSE_SESSION_RE.test(decoded);
  };

  let toggleBtn = null;
  let overlayEl = null;
  let activeReveal = null;

  const ensureButton = () => {
    if (!isCourseSessionPage(window.location.pathname)) {
      if (toggleBtn) toggleBtn.remove();
      toggleBtn = null;
      return;
    }
    if (toggleBtn && document.body.contains(toggleBtn)) return;
    toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.id = "presentation-toggle";
    toggleBtn.textContent = "Mode présentation";
    toggleBtn.addEventListener("click", enterPresentation);
    document.body.appendChild(toggleBtn);
  };

  const stripForSlides = (clone) => {
    clone.querySelectorAll(".breadcrumb-container").forEach((el) => el.remove());
    // On ne retire que les id des titres (doublons avec toc.permalink sur la
    // page d'origine). On ne retire pas tous les [id] : les onglets
    // pymdownx.tabbed (alternate_style) reposent sur des paires
    // input[id] / label[for] — les retirer casserait le changement d'onglet
    // à l'intérieur d'une diapositive.
    clone.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => el.removeAttribute("id"));
    return clone;
  };

  // .md-content__inner enveloppe tout son contenu dans un unique <div> sans
  // attribut avant la vraie séquence h1/h2/p/... — sans ce déballage, la
  // boucle de découpage ne voit qu'un seul enfant (ce <div>) et produit une
  // unique diapositive contenant toute la page.
  const unwrapContentRoot = (article) => {
    let root = article;
    while (root.children.length === 1 && root.children[0].tagName === "DIV") {
      root = root.children[0];
    }
    return root;
  };

  const splitIntoSlides = (article) => {
    const slidesRoot = document.createElement("div");
    slidesRoot.className = "slides";

    const titleSlide = document.createElement("section"); // contenu avant le premier h2
    let h2Slide = null; // section horizontale pour le groupe h2 courant
    let vSlide = null; // section verticale courante dans h2Slide
    let sawH2 = false;

    const startH2 = (h2node) => {
      h2Slide = document.createElement("section");
      vSlide = document.createElement("section");
      vSlide.appendChild(h2node);
      h2Slide.appendChild(vSlide);
      slidesRoot.appendChild(h2Slide);
    };
    const startSub = (hnode) => {
      vSlide = document.createElement("section");
      vSlide.appendChild(hnode);
      h2Slide.appendChild(vSlide);
    };

    Array.from(article.childNodes).forEach((node) => {
      const tag = node.nodeType === 1 ? node.tagName : null;
      if (tag === "H2") {
        sawH2 = true;
        startH2(node);
        return;
      }
      if (sawH2 && (tag === "H3" || tag === "H4")) {
        startSub(node);
        return;
      }
      (sawH2 ? vSlide : titleSlide).appendChild(node);
    });

    if (titleSlide.childNodes.length) slidesRoot.prepend(titleSlide);
    return slidesRoot;
  };

  const pauseMediaOutside = (activeSection) => {
    overlayEl.querySelectorAll("video, audio").forEach((media) => {
      if (!activeSection.contains(media)) media.pause();
    });
  };

  const onEscKey = (e) => {
    if (e.key === "Escape") exitPresentation();
  };

  function enterPresentation() {
    const article = document.querySelector(".md-content__inner");
    if (!article || !window.Reveal || overlayEl) return;

    const clone = stripForSlides(article.cloneNode(true));
    const slides = splitIntoSlides(unwrapContentRoot(clone));
    slides.classList.add("md-typeset"); // conserve les styles mkdocs-material

    const revealRoot = document.createElement("div");
    revealRoot.className = "reveal";
    revealRoot.appendChild(slides);

    overlayEl = document.createElement("div");
    overlayEl.id = "presentation-overlay";
    overlayEl.appendChild(revealRoot);

    const exitBtn = document.createElement("button");
    exitBtn.type = "button";
    exitBtn.id = "presentation-exit";
    exitBtn.textContent = "Quitter";
    exitBtn.addEventListener("click", exitPresentation);
    overlayEl.appendChild(exitBtn);

    document.body.appendChild(overlayEl);
    document.body.classList.add("presentation-active");

    activeReveal = new window.Reveal(revealRoot, {
      hash: false,
      controls: true,
      progress: true,
      center: true,
      embedded: true,
      transition: "slide",
    });
    activeReveal.initialize().then(() => {
      activeReveal.on("slidechanged", (event) => pauseMediaOutside(event.currentSlide));
      pauseMediaOutside(activeReveal.getCurrentSlide());
    });

    document.addEventListener("keydown", onEscKey);
  }

  function exitPresentation() {
    document.removeEventListener("keydown", onEscKey);
    if (activeReveal) {
      activeReveal.destroy();
      activeReveal = null;
    }
    if (overlayEl) {
      overlayEl.remove();
      overlayEl = null;
    }
    document.body.classList.remove("presentation-active");
  }

  const onNavigate = () => {
    // navigation.instant a changé la page sous le diaporama : on ferme plutôt
    // que d'afficher un contenu périmé.
    if (activeReveal) exitPresentation();
    ensureButton();
  };

  // Ce script est chargé en fin de <body> : le DOM de la page courante est
  // déjà disponible, donc on affiche le bouton tout de suite plutôt que
  // d'attendre un éventuel signal de navigation (dont le comportement exact
  // au tout premier chargement n'est pas garanti — voir plus bas).
  ensureButton();

  // document$ est l'observable de navigation de mkdocs-material : il émet à
  // chaque navigation instantanée, sans jamais être déclenché par les
  // mutations DOM internes de reveal.js (contrairement à un MutationObserver
  // générique sur document.body, qui confondrait la mise à jour de la barre
  // de progression pendant le diaporama avec un changement de page et
  // fermerait le diaporama tout seul). L'appel ensureButton() ci-dessus rend
  // le tout robuste même si document$ ne rejoue pas la page déjà chargée.
  if (typeof document$ !== "undefined" && document$ && typeof document$.subscribe === "function") {
    document$.subscribe(onNavigate);
  }
})();
