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
