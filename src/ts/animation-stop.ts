const heroText = document.querySelector(".hero-text") as HTMLSpanElement;

const animationIo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const span = entry.target as HTMLSpanElement;
    span.classList.toggle("animation-paused", !entry.isIntersecting);
  });
});

animationIo.observe(heroText);
