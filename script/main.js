//Psuedo Code//
//All buttons allocated to queryselector or elementsbyID

//Number buttons need to display on a screen which will be it's own div.

//Screen should probably have a small and large display area for current and previous calculations

//Number buttons will have an event listener on them that picks up when someone pushes them they will do a function

// Operation buttons will also have an event listener on them that picks up when someone pushes them they will do a function

// Equals button is going to need to pick up which number buttons have previously been pushed, which operator has been pushed and which current number has been pushed and put them all together but NOT using eval.  I imgaine I will do this by storing the first value entered before the operator is pushed as a variable and use it later and use basic JS maths to put it all together at the end.  


//Issues I see happening? Isolating the operator is going to be an issue.



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

