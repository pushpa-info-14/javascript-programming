/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const count = Array(A.length).fill(0);
  const resultCount = [];

  for (let i = 0; i < A.length; i++) {
    count[A[i] - 1] += 1;
    count[B[i] - 1] += 1;

    let result = 0;
    for (let j = 0; j <= i; j++) {
      if (count[A[j] - 1] === 2) {
        result++;
      }
    }
    resultCount.push(result);
  }

  return resultCount;
};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
