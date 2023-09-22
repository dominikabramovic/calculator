function sum (a,b) {return a + b};
function subtract (a,b) {return a - b};
function multiply (a,b) {return a * b};
function divide (a,b) {return a / b};

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

let sumOf = document.querySelector('.sum')
sumOf.addEventListener('click', () => {
    if (firstArgument === 0) {
        firstArgument = parseInt(displayValue);
        displayValue = '0';
    }
    else {
        secondArgument = parseInt(displayValue);     
        displayValue = sum (firstArgument, secondArgument);
        display.innerHTML = displayValue;
        firstArgument = parseInt(displayValue);
        displayValue = '0';
        secondArgument = 0;
    }
})

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (firstArgument != 0) {
        secondArgument = parseInt(displayValue);
        displayValue = sum(firstArgument, secondArgument);
        display.innerHTML = displayValue;
        firstArgument = displayValue;
        displayValue = '0';
        secondArgument = 0;
    }
})



