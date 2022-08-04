let elInputNumber = document.querySelector(".input-number");
let elButtonCheck = document.querySelector(".button-check");
let elResult = document.querySelector(".result");

elButtonCheck.addEventListener('click', ()=> {
    let inputValue = elInputNumber.value;

    
    if (inputValue % 15 === 0) {
        elResult.textContent = 'FizzBuzz';
    } else if (inputValue % 5 === 0) {
        elResult.textContent = 'Buzz';
    } else if (inputValue % 3 === 0) {
        elResult.textContent = 'Fizz'
    } else {
        elResult.textContent = inputValue;
    }
})