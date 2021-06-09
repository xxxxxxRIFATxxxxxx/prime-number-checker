// Define UI
var number = document.querySelector("#number");
var result = document.querySelector("#result");

// Define Function
function isPrime() {
    for (var i = 2; i < number.value; i++) {
        if (number.value % i === 0) {
            return result.innerText = `${number.value} is not a prime number`;
        };
    };
    return result.innerText = `${number.value} is a prime number`;
};

// Define Event Listener
number.addEventListener("keyup", isPrime);
