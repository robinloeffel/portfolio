const emailLink = document.querySelector('[data-email-link]');

emailLink.addEventListener('click', event => {
  event.preventDefault();
  window.location.href = [ ...'hc.leffeolnibor@ih:otliam' ].reverse().join('');
});
