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