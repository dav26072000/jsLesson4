// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
function separateArr(arr) {
  let evenArr = [];
  let oddArr = [];
  arr.forEach((el) => {
    if (el % 2 === 0) {
      evenArr.push(el);
    } else {
      oddArr.push(el);
    }
  });
  return [evenArr, oddArr];
}

// Write a function that calculates sum, difference, multiplication and division between given array elements
// depending on passed operation symbol. Write appropriate function for each operation.

function calcWithSymbol(arr, symbol) {
  //   console.log(arr.reduce((a, b) => a + b));
  switch (symbol) {
    case "+":
      console.log(arr.reduce((a, b) => a + b));
      break;
    case "-":
      console.log(arr.reduce((a, b) => a - b));
      break;
    case "*":
      console.log(arr.reduce((a, b) => a * b));
      break;
    case "/":
      console.log(arr.reduce((a, b) => a / b));
      break;

    default:
      console.log("invalid symbol");
      break;
  }
}

calcWithSymbol([10, 20, 30], "/");
