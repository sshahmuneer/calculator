const display = document.getElementById("display");
const calculator = document.getElementById("calculator");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.getElementById("=");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

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
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
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
        if (display.textContent === "0" && event.target.id !== "decimal") {
            display.textContent = "";
        }
        if (event.target.id === "decimal" && display.textContent.length < 9 && !display.textContent.includes(".")) {
            display.appendChild(document.createTextNode(event.target.textContent));
        } else if (event.target.id !== "decimal" && display.textContent.length < 9) {
            display.appendChild(document.createTextNode(event.target.id));
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (display.textContent.length > 0) {
            if (firstInput != null) {
                secondInput = display.textContent;
                if (secondInput === "0" && operatorChosen === "/") {
                    solution = "undefined: divide by zero";
                } else {
                    solution = operate(operatorChosen, +firstInput, +secondInput);
                    if (solution.toString().length > 9) {
                        solution = +solution.toPrecision(9);
                    }
                }
                display.textContent = solution;
                firstInput = solution;
                secondInput = null;
                operatorChosen = event.target.id;
            } else {
                firstInput = display.textContent;
                operatorChosen = event.target.id;
                clearFirstInputFromScreen = true;
            }
        }
    });
});

equalsButton.addEventListener("click", (event) => {
    if (display.textContent.length > 0 && firstInput != null && operatorChosen != null) {
        secondInput = display.textContent;
        if (secondInput === "0" && operatorChosen === "/") {
            solution = "undefined: divide by zero";
        } else {
            solution = operate(operatorChosen, +firstInput, +secondInput);
            if (solution.toString().length > 9) {
                solution = +solution.toPrecision(9);
            }
        }
        display.textContent = solution;
        firstInput = null;
        secondInput = null;
        operatorChosen = null;
    }
});

clearButton.addEventListener("click", (event) => {
    firstInput = null;
    secondInput = null;
    operatorChosen = null;
    solution = null;
    display.textContent = "0";
});

deleteButton.addEventListener("click", (event) => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = "0";
    }
});

calculator.addEventListener("keydown", (event) => {
    if ((event.key >= "0" && event.key <= "9") || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "=") {
        document.getElementById(event.key).click();
    } else if (event.key === ".") {
        document.getElementById("decimal").click();
    } else if (event.key === "Backspace") {
        deleteButton.click();
    }
});