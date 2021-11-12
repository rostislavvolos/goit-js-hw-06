function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");
const swapColorBtn = document.querySelector(".change-color");


swapColorBtn.addEventListener('click', (event) => {
 bodyColor.style.backgroundColor = getRandomHexColor();
 spanColor.textContent = getRandomHexColor();
  });


