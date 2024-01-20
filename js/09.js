function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const bodyColor = document.body;
  const spanColor = document.querySelector('.color');
  const changedColor = document.querySelector('.change-color');

  changedColor.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    bodyColor.style.backgroundColor = randomColor;
  });