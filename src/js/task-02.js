const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const findUl = document.querySelector('#ingredients');
const ingArray = ingredients.map((el) => {
  const createIng = document.createElement('li');
  createIng.textContent = el;
  createIng.classList.add = 'item';
  return createIng;
});

findUl.append(...ingArray);