let valueRef = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrementButton = document.querySelector('#counter').firstElementChild;
const incrementButton = document.querySelector('#counter').lastElementChild;

incrementButton.addEventListener('click', event => {
  valueRef += 1;
  counterValue.innerText = valueRef;
});

decrementButton.addEventListener('click', event => {
  valueRef -= 1;
  counterValue.innerText = valueRef;
});
