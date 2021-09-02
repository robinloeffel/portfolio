const balls = document.querySelectorAll('.ball');

balls.forEach(ball => {
  const size = `${Math.floor(Math.random() * (25 - 10 + 1) + 10) }vw`;
  const deg = `rotate(${ Math.floor(Math.random() * (0 - 180 + 1) + 0) }deg)`;

  ball.style.width = size;
  ball.style.height = size;
  ball.style.transform = deg;
});
