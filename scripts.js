// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if(dividend === '' || divider === '') { // Added a condition to detect if either inputs are empty and display a set of text.
    result.innerText = 'Division not performed. Both values are required in inputs. Try again.'
  }
  else if(dividend <= 0 || divider <= 0){ // Added a condition to detect if either inputs are negative, throw an error and display a set of text.
    result.innerText = 'Division not performed. Invalid number provided. Try again.'
    throw new Error(console.trace("Call stack: "))
  }
  else if(typeof(dividend) !== typeof(NaN) || typeof(divider) !== typeof(NaN)){ // Added a condition to detect if either  inputs are not a number, throw an error and display a set of text.
    document.body.innerHTML = "Something critical went wrong. Please reload the page."
    throw new Error(console.trace("Call stack: "))
  }
  else{
    result.innerText = Math.floor(dividend / divider); // Math.floor method for rounding down.
  }
});