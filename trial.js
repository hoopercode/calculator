const lastSum = parseInt(prevDisplay.innerHTML)
  const operator = calcDisplay.innerHTML.charAt(0)
  const newSum = parseInt(calcDisplay.innerHTML)

  const lastSum = prevDisplay.innerHTML
  const operator = calcDisplay.innerHTML.charAt(0)
  const newSum = calcDisplay.innerHTML
equalsButton.addEventListener('click', () => {
  if (calcDisplay.innerHTML == "") {
    calcDisplay.innerHTML = "";
    } 


  else {  
  sum += `${calcDisplay.innerHTML}`;
  prevDisplay.innerHTML = `${prevDisplay.innerHTML}${calcDisplay.innerHTML}=`;
  const operator = calcDisplay.innerHTML
  console.log(operator)
  console.log(calcDisplay.innerHTML)
  const finalSumString= eval(sum) + '';
  calcDisplay.innerHTML = finalSumString;
  }
})

// EQUALS FUNCTION
equalsButton.addEventListener("click", () => {
  if (prevDisplay.innerHTML) {
    calcDisplay.innerHTML = calculate(prevDisplay.innerHTML, calcDisplay.innerHTML)
    prevDisplay.innerHTML = "";
  }
});