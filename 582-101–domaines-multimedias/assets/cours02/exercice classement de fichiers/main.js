// Save/restore theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if ((savedTheme === 'dark') || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark');
    }

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeToggle.setAttribute('aria-pressed', String(isDark));
    });

    // Simple click counter
    const countBtn = document.getElementById('countBtn');
    const countEl = document.getElementById('count');
    let count = 0;
    countBtn.addEventListener('click', () => {
      count += 1;
      countEl.textContent = count;
    });

    // Tiny form handler (no network)
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!email || !message) {
        status.textContent = 'Please fill out all fields.';
        return;
      }
      // Pretend to send…
      status.textContent = 'Message sent! (not really — demo only)';
      form.reset();
    });

    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();