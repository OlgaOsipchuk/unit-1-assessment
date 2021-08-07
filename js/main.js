
let plusBtn = document.querySelector('.plus');
let minusBtn = document.querySelector('.minus');
let displayResult = document.querySelector('.display-result');

let inputField;
let inputValue;
let result = 0;


document.addEventListener('click', function (e) {
    inputField = document.querySelector('input');
    inputValue = parseFloat(inputField.value);
    displayResult.classList.remove('negative');
    if (e.target.classList.contains('plus')) {
        result = result + inputValue;
        displayResult.innerText = result;
    }
    else if (e.target.classList.contains('minus')) {
        result = result - inputValue;
        displayResult.innerText = result;
    }
    if (result < 0) {
        displayResult.classList.add('negative');
    }
})
