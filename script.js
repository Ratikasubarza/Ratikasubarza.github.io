const root = document.documentElement;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const filterStatus = document.querySelector('#filter-status');

function closeNavigation() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('open', !isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
});

navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNavigation();
});

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(filterButton => {
    const isActive = filterButton === button;
    filterButton.classList.toggle('active', isActive);
    filterButton.setAttribute('aria-pressed', String(isActive));
  });

  const target = button.dataset.filter;
  let visibleCount = 0;

  document.querySelectorAll('.project').forEach(card => {
    const isVisible = target === 'all' || card.dataset.tags.split(' ').includes(target);
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  filterStatus.textContent = `Showing ${visibleCount} case ${visibleCount === 1 ? 'study' : 'studies'}`;
}));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion && 'IntersectionObserver' in window) {
  root.classList.add('motion-ready');

  const revealTargets = document.querySelectorAll(
    '.section-head, .project, .artifact-card, .practice-card, .role, .steps > div, .ai-grid > div, .about-copy, .contact-actions'
  );

  revealTargets.forEach((element, index) => {
    element.classList.add('reveal-item');
    element.style.transitionDelay = `${Math.min((index % 4) * 70, 210)}ms`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(element => observer.observe(element));
}

document.querySelector('#year').textContent = new Date().getFullYear();
