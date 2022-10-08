const spanToReplace = document.querySelector('[data-replace-with-link]');
const dialog = document.querySelector('.human-question');
const select = dialog.querySelector('select');
const anchor = document.createElement('a');

anchor.text = 'E-Mail';
anchor.href = '';

spanToReplace.replaceWith(anchor);

anchor.addEventListener('click', event => {
  event.preventDefault();
  dialog.showModal();
});

select.addEventListener('change', ({ target }) => {
  if (target.value === 'potatos') {
    window.location = [ ...'hc.leffeolnibor@ih:otliam' ].reverse().join('');
    select.value = '';
  }

  dialog.close();
});
