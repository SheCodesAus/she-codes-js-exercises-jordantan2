function add(step) {
    // console.log("Look at me i am adding stuff up");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);   
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number);
}

function multiply(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;
    console.log(number);
}

function divide(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;
    console.log(number);
}