const animatedElement = document.querySelector(".hero-title")!;

const io = new IntersectionObserver(([ entry ]) => {
  entry.target.classList.toggle("animation-paused", !entry.isIntersecting);
});

io.observe(animatedElement);
