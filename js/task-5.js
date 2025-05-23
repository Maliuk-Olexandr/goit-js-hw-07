

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  console.log(randomColor);
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});