const animatedElement = document.querySelector<HTMLHeadingElement>(".hero-title")!;

const io = new IntersectionObserver(([ entry ]) => {
  entry.target.classList.toggle("animation-paused", !entry.isIntersecting);
});

io.observe(animatedElement);
