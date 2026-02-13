/* =============================================
   Sureway Church — Shared JavaScript
   Included on every page for consistent UX
   ============================================= */

// ---- Hamburger Menu Toggle ----
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
            document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
});

// ---- Scroll Reveal Observer ----
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
});

// ---- Page Transition on Internal Links ----
document.addEventListener('DOMContentLoaded', () => {
    const internalLinks = document.querySelectorAll('a[href]');

    internalLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Only apply to local HTML links (not external, mailto, tel, #)
        if (!href) return;
        if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) return;
        if (link.getAttribute('target') === '_blank') return;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('page-leaving');
            setTimeout(() => {
                window.location.href = href;
            }, 250);
        });
    });
});

// ---- Dark Mode Toggle ----
document.addEventListener('DOMContentLoaded', () => {
    // Skip dark mode toggle on already-dark pages
    if (document.body.getAttribute('data-theme') === 'dark') return;

    const toggle = document.querySelector('.dark-mode-toggle');
    if (!toggle) return;

    // Check saved preference
    const savedMode = localStorage.getItem('sureway-dark-mode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        toggle.textContent = '☀️';
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('sureway-dark-mode', isDark);
    });
});
