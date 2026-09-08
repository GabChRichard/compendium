# Cours 4 – Mandat client 1 : Web

## Ordre du jour

- Réseaux locaux et Internet
- Introduction au web
- Étude de cas : le domaine web
- Markdown
- Git et GitHub
- GitHub Pages
- Atelier de production
- Mise à jour de la feuille de suivi

## Les réseaux

Connecter plusieurs périphériques informatiques (ordinateurs, imprimantes, serveurs) pour communiquer, partager des ressources ou échanger des données, selon des protocoles définis.

- **Réseau local (LAN)** : périphériques reliés par un routeur ou un commutateur
- **Réseau large (WAN)** : couvre de grandes zones géographiques via les infrastructures de télécommunication — c'est ce qui forme Internet

![Carte d'un réseau](./assets/cours04/network-map.jpg)

## Introduction à Internet

Internet est un réseau de réseaux qui connecte de nombreux dispositifs par le moyen de routeurs. Il permet le partage de contenu (courriels, pages web, fichiers, jeu en ligne, streaming) en reliant des appareils entre eux — un peu comme un système routier.

La quantité de dispositifs connectés dépasse les calculs simples, mais reste représentable : [mapping the internet](https://torontocreatives.com/graphic-design/mapping-the-internet/)

## Introduction au web

Le web (World Wide Web) est le service qui rend le partage de ressources possible par le moyen d'un fureteur (browser), via une adresse url et un cycle de requête/réponse. Le contenu d'un site doit être hébergé; les entreprises qui gèrent cet hébergement sont des **hébergeurs**. Une page web est constituée de HTML, CSS et JavaScript.

### Quelques définitions

- **Internet** — l'infrastructure globale (réseau de réseaux)
- **Réseau local** — périphériques connectés par un routeur/commutateur
- **Web** — service qui permet d'afficher des pages web
- **Site web** — ensemble de pages web
- **Domaine** — adresse qui permet d'accéder à une page/un fichier web
- **Hébergement** — espace privé (serveur) qui stocke des fichiers accessibles par le web
- **Fureteur (Browser)** — logiciel qui affiche des pages web à partir d'une adresse

## Étude de cas : le domaine web

En termes professionnels, le domaine web réfère au personnel impliqué dans la construction et le maintien des pages, services et applications web.

- **Front-end** : la façade du site (interface, couleurs, textes, images) et l'expérience utilisateur
- **Back-end** : la logique côté serveur (requêtes, bases de données, routes)
- Une personne qui fait les deux est dite **full-stack**

### Quelques spécialisations

- **Designer** : conçoit le plan du site, son agencement (layout) et ses éléments visuels
- **Designer UX/UI** : se concentre sur l'expérience utilisateur et la conception d'interface
- **Opérateur web (webmaster)** : gère le site, le domaine, les performances et les mises à jour
- **Expert en accessibilité** : s'assure que le site est utilisable par tous
- **Créateur de contenu** : produit du contenu écrit/visuel optimisé pour la recherche

## Markdown

Le Markdown est un langage de balisage (comme le HTML) pour rédiger du texte formaté simplement, sans logiciel de mise en page.

- Extension de fichier : `.md`
- Utilisé pour la documentation sur GitHub, mais compatible avec Notion, Discord, Obsidian, etc.
- Feuille de référence : [markdownguide.org/cheat-sheet](https://www.markdownguide.org/cheat-sheet/)

### Démo

Avant de travailler dans GitHub, un tour d'horizon rapide avec un éditeur Markdown en ligne : [stackedit.io](https://stackedit.io/)

## Git

Git est un logiciel local de contrôle de versions : il permet de suivre les changements d'un projet dans le temps, de collaborer et de revenir à une version antérieure si nécessaire.

- Fonctionne sans connexion réseau — pas besoin de compte pour l'utiliser localement
- Chaque sauvegarde d'une version s'appelle un **commit**
- Git garde l'historique de tous les commits et permet de comparer les versions

## GitHub

GitHub est un service d'hébergement infonuagique pour des dépôts Git — un peu comme Google Drive, mais pensé pour le code et la collaboration.

- Héberger un projet et son historique en ligne
- Collaborer via un historique de modifications
- Suivre qui a modifié quoi et corriger des erreurs en revenant en arrière
- Publier un projet en le rendant public

### Vocabulaire GitHub

- **Repository (repo)** : le dépôt du projet
- **Commit** : sauvegarde de l'état du projet
- **Push** : envoie les commits sur GitHub
- **Pull** : récupère les mises à jour du dépôt
- **Branche** : copie parallèle du projet
- **Pull request** : requête pour fusionner une contribution
- **Fork** : copie personnelle d'un dépôt existant

## GitHub Pages

Service gratuit de GitHub qui permet de publier un site web statique directement à partir d'un dépôt. On peut y mettre du code HTML/CSS ou du Markdown — GitHub le transforme en site public accessible par une adresse.

### Publier sur GitHub Pages

1. Aller dans son dépôt → onglet **Settings**
2. Dans le menu de gauche, choisir **Pages**
3. Sous *Branch*, choisir **Main** puis **Root**
4. Cliquer sur **Save**, puis rafraîchir la page
5. GitHub affiche l'adresse du site publié

## Atelier — Création d'un site de révision pour l'examen 

- Créer un compte GitHub (si ce n'est pas déjà fait)
- Créer une page HTML 
- Rédiger le contenu de la page à partir du document de révision
- Publier sur GitHub Pages
- Vérifier que le site est en ligne

## Branchements 

Au cours de votre parcours à l'agence, vous allez très certainement utiliser beaucoup de câbles. Il devient donc important d'apprendre à les connaître, mais aussi à les ranger.

### HDMI

![HDMI](./assets/cours03/hdmi.png)

Transmet des signaux audio et vidéo dans un seul fil compact. Supporte des résolutions jusqu'à 8K, des taux de rafraîchissement jusqu'à 240 Hz, le HDR et le VRR. Utilisé pour brancher moniteurs, consoles et téléviseurs. Il existe plusieurs standards (1.0, 2.0, 2.1…) et types (Standard, mini, micro).

### DisplayPort

![DisplayPort](./assets/cours03/displayport.png)

Très semblable au HDMI — transmet audio et vidéo dans un seul fil. Offre généralement de meilleures résolutions et taux de rafraîchissement, mais les différences avec le HDMI sont aujourd'hui minimes.

### Ethernet (RJ45)

![Ethernet](./assets/cours03/ethernet.png)

Le câble réseau « par défaut », utilisé pour connecter des périphériques entre eux ou à des appareils réseau (routeur, commutateur). Il existe plusieurs catégories, qui permettent des vitesses de transfert plus élevées ou un blindage contre le bruit électronique (*shield*) — un câble de catégorie 5 permet une vitesse de transfert de 1 Go/s.

### PowerCon et adaptateur AC

![PowerCon](./assets/cours03/powercon.png)
![Adaptateur AC](./assets/cours03/adaptateur-ac.png)

Deux câbles d'alimentation. Le PowerCon se distingue par le fait qu'il peut être verrouillé.

### XLR et prises audio

![XLR](./assets/cours03/xlr.png)

Le **XLR** est un connecteur robuste pour les signaux audio, utilisé pour les consoles, instruments et micros. Les prises audio se distinguent par leur taille : la grande prise (1/4 po) sert à l'équipement professionnel, la petite (mini-jack) aux produits grand public.

### USB

![USB](./assets/cours03/usb.png)

Connecteur standardisé qui permet l'alimentation et le transfert de données entre périphériques (clavier, souris, caméra, clé USB…). Le USB4 permet des vitesses de 40 Go/s. Connecteurs les plus courants aujourd'hui : USB-A et USB-C.

### Comment bien ranger un câble?

Rouler le fil en suivant le sens des brins (avec une légère torsion) pour éviter de l'endommager, puis utiliser une attache pour le conserver en place.

## Atelier — Branchement et rangement

Démonstration et classification des câbles du département, méthode de rangement.

## Préparation pour l'examen

## Merci et à la semaine prochaine!

Commentaires ou questions?
