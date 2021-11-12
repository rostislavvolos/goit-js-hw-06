const listEl = document.querySelector('#categories');
const listElLength = listEl.children.length;
console.log(`Number of categories: ${listElLength}`);
const ul = document.querySelectorAll('.item');
ul.forEach(el => {

    console.log(
      `Category: ${el.firstElementChild.textContent}`,
    );

    console.log(
        `Elements: ${el.lastElementChild.childElementCount}`,
    );
  });