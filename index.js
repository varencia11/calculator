let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let num1 = '';
let num2 = '';
let operation = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else if (isNaN(value)) {
      operation = value;
      display.value += value;
    } else {
      if (!operation) {
        num1 += value;
        display.value = num1;
      } else {
        num2 += value;
        display.value = num1 + operation + num2;
      }
    } 
  });
});

function calculate() {
  let result = 0;
  switch (operation) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '−':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '×':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '÷':
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
  display.value = result;
  num1 = '';
  num2 = '';
  operation = '';
}

function clear() {
  display.value = '';
  num1 = '';
  num2 = '';
  operation = '';
}
