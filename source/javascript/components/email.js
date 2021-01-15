const links = document.querySelectorAll('[data-email-link]');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    location.href = 'mailto:hi@robinloeffel.ch';
  });
});
