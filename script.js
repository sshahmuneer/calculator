const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const addButton = document.getElementById("+");
const equalsButton = document.getElementById("=");

let firstInput;
let secondInput;
let operatorChosen;
let solution;
let clearFirstInputFromScreen;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);
            // break;
        case '-':
            return subtract(firstNumber, secondNumber);
            // break;
        case '*':
            return multiply(firstNumber, secondNumber);
            // break;
        case '/':
            return divide(firstNumber, secondNumber);
            // break;
        default:
    }
}

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (solution != null) {
            solution = null;
            display.textContent = "";
        }
        if (clearFirstInputFromScreen) {
            clearFirstInputFromScreen = false;
            display.textContent = "";
        }
        if (display.textContent === "0") {
            display.textContent = "";
        }
        if (display.textContent.length < 9) {
            display.appendChild(document.createTextNode(event.target.id));
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (display.textContent.length > 0) {
            if (firstInput != null) {
                secondInput = display.textContent;
                // operatorChosen = event.target.id;
                solution = operate(operatorChosen, +firstInput, +secondInput);
                display.textContent = solution;
                firstInput = solution;
                secondInput = null;
                operatorChosen = event.target.id;
            } else {
                firstInput = display.textContent;
                operatorChosen = event.target.id;
                // display.textContent = "";
                clearFirstInputFromScreen = true;
            }
        }
    });
});

equalsButton.addEventListener("click", (event) => {
    if (display.textContent.length > 0 && firstInput != null && operatorChosen != null) {
        secondInput = display.textContent;
        solution = operate(operatorChosen, +firstInput, +secondInput);
        display.textContent = solution;
        // firstInput = solution;
        firstInput = null;
        operatorChosen = null;
    }
});