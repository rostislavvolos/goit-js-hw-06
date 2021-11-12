const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const plusCountBtn = document.querySelector('[data-action = increment]');
const minusCountBtn = document.querySelector('[data-action = decrement]');


plusCountBtn.addEventListener('click', () => {
counterValue += 1;
counterValueEl.textContent = counterValue;
});


minusCountBtn.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
    });