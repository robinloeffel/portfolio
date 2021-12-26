const diashowContainer = document.querySelector('[data-project-diashow]');
const diashowScrollTriggers = document.querySelectorAll('[data-project-diashow-scroll-trigger]');

const scrollHorizontally = ({
  target: clickedButton
}) => {
  const currentProject = clickedButton.closest('.project');

  diashowContainer.scrollLeft =
    currentProject.nextElementSibling
      ? currentProject.nextElementSibling.offsetLeft
      : 0;
};

diashowScrollTriggers.forEach(scrollTrigger => {
  scrollTrigger.addEventListener('click', scrollHorizontally);
});
