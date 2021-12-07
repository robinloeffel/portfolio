const scrollContainer = document.querySelector('[data-project-container]');
const scrollTriggers = document.querySelectorAll('[data-project-scroller]');

const scrollHorizontally = ({
  target: clickedButton
}) => {
  const currentProject = clickedButton.closest('.project');

  scrollContainer.scrollLeft =
    currentProject.nextElementSibling
      ? currentProject.nextElementSibling.offsetLeft
      : 0;
};

scrollTriggers.forEach(trigger => {
  trigger.addEventListener('click', scrollHorizontally);
});
