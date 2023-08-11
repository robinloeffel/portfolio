const animatedElement = document.querySelector(".hero-title") as HTMLHeadingElement;

const io = new IntersectionObserver(entries => {
  const [ entry ] = entries;
  entry.target.classList.toggle("animation-paused", !entry.isIntersecting);
});

io.observe(animatedElement);
