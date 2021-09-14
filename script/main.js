const numberButtons = document.querySelectorAll('[data-number')
const addButton = document.querySelector('[data-add]')
const subButton = document.querySelector('[data-sub]')
const divideButton = document.querySelector('[data-divide]')
const multiplyButton = document.querySelector('[data-multiply]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-backspace]')
const allClearButton = document.querySelector('[data-all-clear]')
const calcDisplay= document.querySelector('[data-current-display]')


//Numbers to match with
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];

//Start with blank sum
let sum = [];

//Trying to get numbers to show in the screen -- FINALLY WORKING
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
      numbers.forEach(number => {
          if (number == button.dataset.number) {
          calcDisplay.innerHTML += number;
          } 
      });
  });
});

// CLEAR DISPLAY FUNCTIOn

allClearButton.addEventListener('click', () => {
  const clear = () => {
      calcDisplay.innerHTML = "";
      sum = [];
  }
  clear();
});

//ADDING FUNCTION
addButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '+';
});

// DIVIDE FUNCTION
divideButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '/';
});

// MULTIPLY FUNCTION
multiplyButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '*';
});

// MINUS FUNCTION
subButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '-';
});

// EQUALS FUNCTION

equalsButton.addEventListener('click', () => {
  sum += `${calcDisplay.innerHTML}`;
  const finalSumString= eval(sum) + '';
  calcDisplay.innerHTML = finalSumString;
})




