const numbers = document.querySelectorAll("button");
const screen = document.querySelector("#calcValue");
let calculator = {
  numberA: "",
  numberB: "",
  operator: "",
};

function setNumbers(value) {
  let i;
  !calculator.operator ? (i = "numberA") : (i = "numberB");

  // Don't allow multiple commas
  if (calculator[i].includes(".") && value === ".") return null;
  // Add a 0 before comma
  if (!calculator[i] && value === ".") calculator[i] = "0";
  // Remove 0 if next number is not a comma
  if (calculator[i] === "0" && value != ".") calculator[i] = "";

  calculator[i] += value;
  screen.value = calculator[i];
}

function setOperator(operator) {
  if (calculator.numberB) return null;
  calculator.operator = operator;
}

function sumValue() {
  if (!calculator.numberB) return null;
  let calculate = operate(
    parseFloat(calculator.numberA),
    parseFloat(calculator.numberB),
    calculator.operator
  );

  // Reset numberB and keep operator
  calculator.numberA = calculate;
  calculator.numberB = "";
  screen.value = calculate;
}

function utils(util) {
  if (util === "AC") {
    calculator.numberA = "";
    calculator.numberB = "";
    calculator.operator = "";
    screen.value = "";
  } else if (util === "C") {
    let i;
    !calculator.operator ? (i = "numberA") : (i = "numberB");
    calculator[i] = calculator[i].slice(0, -1);
    screen.value = calculator[i];
  }
}

// Iterate through each button
numbers.forEach((button) => {
  // and for each button add a 'click' listener
  button.addEventListener("click", () => {
    let btnClicked = button.classList[0];

    switch (btnClicked) {
      case "btn-number":
        setNumbers(button.textContent);
        break;
      case "btn-operator":
        setOperator(button.textContent);
        break;
      case "btn-utils":
        utils(button.textContent);
        break;
      case "btn-sum":
        sumValue();
        break;
    }
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
    case "+":
      value = add(a, b);
      break;
    case "−":
      value = subtract(a, b);
      break;
    case "×":
      value = multiply(a, b);
      break;
    case "÷":
      value = divide(a, b);
      break;
  }
  return value;
};
