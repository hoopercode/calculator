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


// const operators = ["+","-","*","/"]; -- No Longer Required but will keep because lazy


//Start with blank sum - Need 
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
      prevDisplay.innerHTML = "";
      sum = [];
  }
  clear();
});

//ADDING FUNCTION
addButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '+';
  let operator = "+"
  
});

// DIVIDE FUNCTION
divideButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '/';
  
});



// MULTIPLY FUNCTION
multiplyButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '*';
  let operator = "*"
});

// MINUS FUNCTION
subButton.addEventListener('click', () => {
  sum = `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${calcDisplay.innerHTML}`;
  calcDisplay.innerHTML = '-';
  let operator = "-"
});


// EQUALS FUNCTION
  const lastSum = prevDisplay.innerHTML
  const operator = calcDisplay.innerHTML.charAt(0)
  const newSum = calcDisplay.innerHTML

equalsButton.addEventListener("click", () => {
  if (prevDisplay.innerHTML) {
    prevDisplay.innerHTML = `${prevDisplay.innerHTML}${calcDisplay.innerHTML}=`
    console.log(prevDisplay.innerHTML)
    console.log(typeof prevDisplay.innerHTML)

    calcDisplay.innerHTML = calculate(prevDisplay.innerHTML,calcDisplay.innerHTML)
    
  }
});

const calculate = (lastSum, newSum) => {
  if (calcDisplay.innerHTML.includes("+")) {
    return (parseFloat(lastSum) + parseFloat(newSum))
  } else if (prevDisplay.innerHTML.charAt(0) === "-") {
    return (parseFloat(lastSum) - parseFloat(newSum)); //--
  } else if (prevDisplay.innerHTML.includes("*")) {
    return (parseFloat(lastSum)*parseFloat(newSum));
  } else if (prevDisplay.innerHTML.charAt(0) === "/") {
    return (parseFloat(lastSum)/parseFloat(newSum));
  } else {
    return (parseFloat(lastSum) + parseFloat(newSum))
  }
};
