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
const numberButtonOne = document.getElementById("1");
const numberButtonTwo = document.getElementById("2");
const numberButtonThree = document.getElementById("3");
const numberButtonFour = document.getElementById("4");
const numberButtonFive = document.getElementById("5");
const numberButtonSix = document.getElementById("6");
const numberButtonSeven = document.getElementById("7");
const numberButtonEight = document.getElementById("8");
const numberButtonNine = document.getElementById("9");

numberButtonZero.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const zero = document.createTextNode("0");
        display.appendChild(zero);
    }
});

numberButtonOne.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const one = document.createTextNode("1");
        display.appendChild(one);
    }
});

numberButtonTwo.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const two = document.createTextNode("2");
        display.appendChild(two);
    }
});

numberButtonThree.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const three = document.createTextNode("3");
        display.appendChild(three);
    }
});

numberButtonFour.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const four = document.createTextNode("4");
        display.appendChild(four);
    }
});

numberButtonFive.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const five = document.createTextNode("5");
        display.appendChild(five);
    }
});

numberButtonSix.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const six = document.createTextNode("6");
        display.appendChild(six);
    }
});

numberButtonSeven.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const seven = document.createTextNode("7");
        display.appendChild(seven);
    }
});

numberButtonEight.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const eight = document.createTextNode("8");
        display.appendChild(eight);
    }
});

numberButtonNine.addEventListener("click", (event) => {
    if (display.childNodes.length < 9) {
        const nine = document.createTextNode("9");
        display.appendChild(nine);
    }
});