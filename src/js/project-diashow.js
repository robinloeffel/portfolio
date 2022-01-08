const diashowContainer = document.querySelector('[data-project-diashow]');
const diashowScrollTriggers = document.querySelectorAll('[data-project-diashow-scroll-trigger]');

const scrollHorizontally = ({
  target: clickedButton
}) => {
  const currentProject = clickedButton.closest('.project');

  window.requestAnimationFrame(() => {
    diashowContainer.scroll(currentProject.nextElementSibling?.offsetLeft || 0, 0);
  });
};

diashowScrollTriggers.forEach(scrollTrigger => {
  scrollTrigger.addEventListener('click', scrollHorizontally);
});
