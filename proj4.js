let currentNumber = '';
let currentOperator = '';
let firstOperand = '';
let inputHistory = '';

const display = document.getElementById('display');
const inputHistoryDisplay = document.getElementById('input-history');

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

// function setOperator(operator) {
//   if (currentOperator === '' && currentNumber !== '') {
//     inputHistory += currentNumber + ' ' + operator + ' ';
//     firstOperand = currentNumber;
//     currentNumber = '';
//     currentOperator = operator;
//     updateDisplay();
//   }
// }
// ... (your existing code)

function setOperator(operator) {
  if (currentOperator === '' && currentNumber !== '') {
    if (inputHistory === '') {
      inputHistory = currentNumber + ' ' + operator;
    } else {
      inputHistory += ' ' + operator;
    }
    firstOperand = currentNumber;
    currentNumber = '';
    currentOperator = operator;
    updateDisplay();
  }
}

function updateDisplay() {
  let displayText = inputHistory + ' ' + currentNumber;
  display.textContent = displayText.trim() || '0';
}



function calculate() {
  if (currentNumber !== '' && firstOperand !== '' && currentOperator !== '') {
    switch (currentOperator) {
      case '+':
        currentNumber = (parseFloat(firstOperand) + parseFloat(currentNumber)).toString();
        break;
      case '-':
        currentNumber = (parseFloat(firstOperand) - parseFloat(currentNumber)).toString();
        break;
      case '*':
        currentNumber = (parseFloat(firstOperand) * parseFloat(currentNumber)).toString();
        break;
      case '/':
        if (parseFloat(currentNumber) === 0) {
          currentNumber = 'Error';
        } else {
          currentNumber = (parseFloat(firstOperand) / parseFloat(currentNumber)).toString();
        }
        break;
    }
    inputHistory = '';
    firstOperand = '';
    currentOperator = '';
    updateDisplay();
  }
}


function deleteLast() {
  if (currentNumber === '') {
    const lastCharacter = inputHistory.slice(-1);
    if (lastCharacter === ' ') {
      inputHistory = inputHistory.slice(0, -3); // Remove the operator and two spaces
    } else {
      inputHistory = inputHistory.slice(0, -1);
    }
  } else {
    currentNumber = currentNumber.slice(0, -1);
  }
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  currentOperator = '';
  firstOperand = '';
  inputHistory = '';
  updateDisplay();
}




// Add event listeners to buttons and perform corresponding actions
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for number buttons, operator buttons, clear, delete, and equals
});
