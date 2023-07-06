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

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number-button");
const addButton = document.getElementById("+");
const equalsButton = document.getElementById("=");

let firstInput;
let secondInput;
let operatorChosen;
let solution;

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (solution != null) {
            solution = null;
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

            display.textContent = "";
        }
    }
});

equalsButton.addEventListener("click", (event) => {
    if (display.textContent.length > 0) {
        secondInput = display.textContent;
        solution = operate(operatorChosen, +firstInput, +secondInput);
        display.textContent = solution;
    }
});