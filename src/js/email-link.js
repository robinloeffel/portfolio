const spanToReplace = document.querySelector('[data-replace-with-link]');
const anchor = document.createElement('a');

anchor.text = 'E-Mail';
anchor.href = '';
anchor.addEventListener('click', event => {
  event.preventDefault();
  window.location = [ ...'hc.leffeolnibor@ih:otliam' ].reverse().join('');
});

spanToReplace.replaceWith(anchor);
