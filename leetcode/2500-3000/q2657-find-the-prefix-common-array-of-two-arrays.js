/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const frequency = Array(A.length + 1).fill(0);
  const resultCount = [];

  let count = 0;
  for (let i = 0; i < A.length; i++) {
    frequency[A[i]] += 1;
    if (frequency[A[i]] === 2) {
      count += 1;
    }

    frequency[B[i]] += 1;
    if (frequency[B[i]] === 2) {
      count += 1;
    }
    resultCount.push(count);
  }

  return resultCount;
};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
