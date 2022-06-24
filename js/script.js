const numbers = document.querySelectorAll(".btn-number");
const screen = document.querySelector("#calcValue");
let number = "";

function updateScreen(value) {
  if (number.includes(",") && value === ",") return true;
  if (!number && value === ",") number = "0";
  if (number === "0" && value != ",") number = "";
  number += value;
  screen.value = number;
}

// Iterate through each button
numbers.forEach((button) => {
  // and for each button add a 'click' listener
  button.addEventListener("click", () => {
    selectedNumber = button.textContent;
    // send it for update display
    updateScreen(selectedNumber);
  });
});

// Math operators
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => Math.round((a / b) * 100) / 100;

// Directs to operators
const operate = (a, b, operator) => {
  let value;

  switch (operator) {
    case "add":
      value = add(a, b);
      break;
    case "subtract":
      value = subtract(a, b);
      break;
    case "multiply":
      value = multiply(a, b);
      break;
    case "divide":
      value = divide(a, b);
      break;
  }
  return value;
};
