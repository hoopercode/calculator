//Setting of variables to use throughout project

const numberButtons = document.querySelectorAll('[data-number')
const addButton = document.querySelector('[data-add]')
const subButton = document.querySelector('[data-sub]')
const divideButton = document.querySelector('[data-divide]')
const multiplyButton = document.querySelector('[data-multiply]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-backspace]')
const allClearButton = document.querySelector('[data-all-clear]')
const calcDisplay= document.querySelector('[data-current-display]')
const prevDisplay = document.querySelector('[data-previous-display]')
const operatorButtons = document.querySelectorAll('[data-operator]')



//Numbers to match with when allocating numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];

//Start with blank sum - Need 
let sum = []; // Use this to keep track of sums
let operator = []; //Use this to isolate the operator as an array to use later

//Number Button - Event Listener
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
      numbers.forEach(number => {
          if (number == button.dataset.number) {
          calcDisplay.innerHTML += number;
          } 
      });
  });
}); 

// CLEAR DISPLAY  - Event Listener

allClearButton.addEventListener('click', () => {
  const clear = () => {
      calcDisplay.innerHTML = "";
      prevDisplay.innerHTML = "";
      sum = [];
      operator = [];
  }
  clear();
});

//ADDING FUNCTION  - Event Listener
addButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '+';
  operator.push("+");
  
});

// DIVIDE FUNCTION - Event Listener
divideButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '/';
  operator.push("/")
});



// MULTIPLY FUNCTION - Event Listener
multiplyButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '*';
  operator.push("*")
});

// MINUS FUNCTION - Event Listener
subButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '-';
  operator.push("-")
  
});


// EQUALS FUNCTION - Event Listener
equalsButton.addEventListener("click", () => {
  if (prevDisplay.innerHTML) {
    prevDisplay.innerHTML = `${prevDisplay.innerHTML}${calcDisplay.innerHTML}=`
    calcDisplay.innerHTML = calculate(sum,calcDisplay.innerHTML.substring(1))
    // setTimeout(doSomething, 5000);



    
  }
});
// CALCULATE FUNCTION - To be used alongside equals listener
const calculate = (lastSum, newSum) => {
  if (operator.toString() === "+") {
    return (parseFloat(lastSum) + parseFloat(newSum))
  } else if (operator.toString() === "-") {
    return (parseFloat(lastSum) - parseFloat(newSum)); 
  } else if (operator.toString() === "*") {
    return (parseFloat(lastSum) * parseFloat(newSum));
  } else if (operator.toString() === "/") {
    return (parseFloat(lastSum) / parseFloat(newSum));
  } else {
    return (parseFloat(lastSum) + parseFloat(newSum))
  }
};