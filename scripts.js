function sum (a,b) {return a + b};
function subtract (a,b) {return a - b};
function multiply (a,b) {return a * b};
function divide (a,b) {return a / b};
function operateAgain (firstArgument, secondArgument, display, displayValue){
    secondArgument = parseInt(displayValue);     
    displayValue = window[operation](firstArgument,secondArgument);
    display.innerHTML = displayValue;
    firstArgument = parseInt(displayValue);
    displayValue = '0';
    secondArgument = 0;
    return;
}

let firstArgument = 0;
let secondArgument = 0;
let operation;

//Handles number input and displays value
let displayValue = '0';
let display = document.querySelector('.display');
let nums = document.querySelectorAll('.num');
nums.forEach(num => num.addEventListener('click', () => {
    displayValue === '0' ? displayValue = num.innerHTML : displayValue += num.innerHTML;
    display.innerHTML = displayValue;
}))

let erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    displayValue = '0';
    display.innerHTML = '0';
    firstArgument = 0;
    secondArgument = 0;
})

let sumEvent = document.querySelector('.sum')
sumEvent.addEventListener('click', () => {
    if (firstArgument === 0) {
        firstArgument = parseInt(displayValue);
        displayValue = '0';
        operation = 'sum';
    }
    else {
        operateAgain (firstArgument, secondArgument, display, displayValue)
        operation = 'sum';
    }
})

let multiplyEvent = document.querySelector('.multiply');
multiplyEvent.addEventListener('click', () => {
    if (firstArgument === 0) {
        firstArgument = parseInt(displayValue);
        displayValue = '0';
        operation = 'multiply';
    }
    else {
        operateAgain (firstArgument, secondArgument, display, displayValue);
        operation = 'multiply';
    }
});

let divideEvent = document.querySelector('.divide');
divideEvent.addEventListener('click', () => {
    if (firstArgument === 0) {
        firstArgument = parseInt(displayValue);
        displayValue = '0';
        operation = 'divide';
    }
    else operateAgain (firstArgument, secondArgument, display, displayValue)
})

let subtractEvent = document.querySelector('.subtract');
subtractEvent.addEventListener('click', () => {
    if (firstArgument === 0) {
        firstArgument = parseInt(displayValue);
        displayValue = '0';
        operation = 'subtract';
    }
    else operateAgain (firstArgument, secondArgument, display, displayValue)
})

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (firstArgument != 0) {
        secondArgument = parseInt(displayValue);
        displayValue = window[operation](firstArgument,secondArgument);       
        display.innerHTML = displayValue;
        firstArgument = displayValue;
        displayValue = '0';
        secondArgument = 0;
    }
})



