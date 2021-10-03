const circles = document.querySelector('.circles');

const randomNumberBetween = (
  min,
  max
) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
const backgroundColors = [
  'lightgreen',
  'lightsalmon',
  'lightsteelblue',
  'lightseagreen',
  'lightskyblue'
];

const numberOfCircles = randomNumberBetween(15, 20);

for (let index = 0; index <= numberOfCircles; index++) {
  const size = `${randomNumberBetween(10, 25)}vw`;
  const top = `${randomNumberBetween(-10, 90)}%`;
  const left = `${randomNumberBetween(-20, 90)}%`;
  const element = document.createElement('li');

  element.classList.add('circle');
  element.style.width = size;
  element.style.height = size;
  element.style.top = top;
  element.style.left = left;
  element.style.backgroundColor = backgroundColors[randomNumberBetween(0, backgroundColors.length - 1)];

  circles.append(element);
}
