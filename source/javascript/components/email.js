const link = document.querySelector('[href*=mailto]');

link.addEventListener('click', event => {
  event.preventDefault();
  location.href = 'mailto:hi@robinloeffel.ch';
});
