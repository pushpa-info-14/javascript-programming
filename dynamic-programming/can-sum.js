/**
 * Write a function 'canSum(targetSum, numbers)' that takes in a
 * targetSum and an array of numbers as arguments.
 *
 * The function should return a boolean indicating whether or not it
 * is possible to generate the tragetSum using numbers from the array.
 *
 * You may use an element of the array as many times as needed.
 *
 * You may assume that all the input numbers are non-negative.
 */

const canSum = (targetSum, numbers) => {
  if (targetSum < 0) return false;
  if (targetSum === 0) return true;

  for (let num of numbers) {
    if (canSum(targetSum - num, numbers)) {
      return true;
    }
  }

  return false;
};

console.log(canSum(30, [40, 32, 2])); // true
console.log(canSum(7, [2, 1])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(7, [2, 3, 5])); // true
//console.log(canSum(300, [7, 14])); // false

// m =  target sum
// n = array length
// O(n^m) time
// O(m) space
