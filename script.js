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
            add(firstNumber, secondNumber);
            break;
        case '-':
            subtract(firstNumber, secondNumber);
            break;
        case '*':
            multiply(firstNumber, secondNumber);
            break;
        case '/':
            divide(firstNumber, secondNumber);
            break;
        default:
    }
}

const display = document.getElementById("display");
const numberButtonZero = document.getElementById("0");

numberButtonZero.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const zero = document.createTextNode("0");
        display.appendChild(zero);
    }
});