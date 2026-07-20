const root = document.documentElement;
const themeButton = document.querySelector('.theme');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const filterStatus = document.querySelector('#filter-status');

function updateThemeControl() {
  const isDark = root.classList.contains('dark');
  themeButton.textContent = isDark ? '☀' : '◐';
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', isDark ? 'Use light theme' : 'Use dark theme');
}

function closeNavigation() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

updateThemeControl();

themeButton.addEventListener('click', () => {
  root.classList.toggle('dark');
  try {
    localStorage.setItem('portfolio-theme', root.classList.contains('dark') ? 'dark' : 'light');
  } catch {}
  updateThemeControl();
});

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

document.querySelector('#year').textContent = new Date().getFullYear();
