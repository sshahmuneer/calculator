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
const numberButtonZero = document.getElementById("0");
const numberButtonOne = document.getElementById("1");
const numberButtonTwo = document.getElementById("2");
const numberButtonThree = document.getElementById("3");
const numberButtonFour = document.getElementById("4");
const numberButtonFive = document.getElementById("5");
const numberButtonSix = document.getElementById("6");
const numberButtonSeven = document.getElementById("7");
const numberButtonEight = document.getElementById("8");
const numberButtonNine = document.getElementById("9");
const addButton = document.getElementById("+");
const equalsButton = document.getElementById("=");

let firstInput;
let secondInput;
let operatorChosen;
let solution;

numberButtonZero.addEventListener("click", (event) => {
    if (display.childNodes.length < 9 && display.textContent !== "0") {
        const zero = document.createTextNode("0");
        display.appendChild(zero);
    }
});

numberButtonOne.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const one = document.createTextNode("1");
        display.appendChild(one);
    }
});

numberButtonTwo.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const two = document.createTextNode("2");
        display.appendChild(two);
    }
});

numberButtonThree.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const three = document.createTextNode("3");
        display.appendChild(three);
    }
});

numberButtonFour.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const four = document.createTextNode("4");
        display.appendChild(four);
    }
});

numberButtonFive.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const five = document.createTextNode("5");
        display.appendChild(five);
    }
});

numberButtonSix.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const six = document.createTextNode("6");
        display.appendChild(six);
    }
});

numberButtonSeven.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const seven = document.createTextNode("7");
        display.appendChild(seven);
    }
});

numberButtonEight.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const eight = document.createTextNode("8");
        display.appendChild(eight);
    }
});

numberButtonNine.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        const nine = document.createTextNode("9");
        display.appendChild(nine);
    }
});

addButton.addEventListener("click", (event) => {
    if (display.childNodes.length > 0) {
        firstInput = display.textContent;
        operatorChosen = "+";
        display.textContent = "";
    }
});

equalsButton.addEventListener("click", (event) => {
    if (display.textContent.length > 0) {
        secondInput = display.textContent;
        solution = operate(operatorChosen, +firstInput, +secondInput);
        display.textContent = solution;
    }
});