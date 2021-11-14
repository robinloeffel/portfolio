const scrollContainer = document.querySelector('[data-project-container]');
const { clientWidth: scrollContainerWidth } = scrollContainer;
const scrollTriggers = document.querySelectorAll('[data-project-scroller]');

const scrollHorizontally = ({
  target: {
    dataset: {
      projectScroller: start
    }
  }
}) => {
  if (start === 'start') {
    scrollContainer.scrollLeft = 0;
  } else {
    scrollContainer.scrollLeft += scrollContainerWidth;
  }
};

scrollTriggers.forEach(trigger => {
  trigger.addEventListener('click', scrollHorizontally);
});
