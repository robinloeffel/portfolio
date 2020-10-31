const nodes = document.querySelectorAll('.project-image');

const fadeIn = event => {
  event.target.classList.add('project-image-loaded');
};

nodes.forEach(node => {
  node.addEventListener('load', fadeIn, {
    once: true
  });
});
