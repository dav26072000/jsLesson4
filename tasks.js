//1 Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
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

//2 Write a function that calculates sum, difference, multiplication and division between given array elements
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

//3 Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
function phoneNumber(str) {
  let phone = /^[\+]?\d{10}$/im;
  if (phone.test(str)) {
    return "valid";
  } else {
    return "invalid";
  }
}

//4 Given a word and a list of possible anagrams, select the correct sublist.
function findWords(str, arr) {
  str = str.split("");
  let answer = [];
  for (const arrEL of arr) {
    let newArrEl = arrEL.split("");
    let compare = 0;
    for (const strEl of str) {
      for (const eachNewArr of newArrEl) {
        if (eachNewArr === strEl) {
          compare++;
        }
      }
      if (compare === str.length) {
        answer.push(arrEL);
      }
    }
  }
  return answer;
}

// 5 Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.
function findNumbers(str) {
  let regex = /\d+/g;
  let match = str.match(regex);

  let maxNum = String(Math.max(...match));
  match.splice(match.indexOf(maxNum));
  let maxNum2 = String(Math.max(...match));

  return Number(maxNum) + Number(maxNum2);
}
