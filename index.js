const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

console.log(counterElement)
console.log(incrementButton)
console.log(decrementButton)

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  counterElement.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counterElement.textContent = count;
});


