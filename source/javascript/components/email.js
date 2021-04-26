const links = document.querySelectorAll('[data-email]');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    location.href = `mailto:${ link.dataset.email }`;
  });
});
