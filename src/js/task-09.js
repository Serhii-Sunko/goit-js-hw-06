function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('button.change-color');
const textRef = document.querySelector('.color');

buttonRef.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyRef.style.backgroundColor = newColor;
  textRef.innerHTML = newColor;
});
