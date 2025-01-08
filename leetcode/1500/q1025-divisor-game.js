/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n, isAlice = false) {
  if (n == 1) return isAlice;

  for (let x = 1; x < n; x++) {
    if (n % x == 0) {
      return divisorGame(n - x, !isAlice);
    }
  }

  return false;
};

console.log(divisorGame(2));
console.log(divisorGame(3));
