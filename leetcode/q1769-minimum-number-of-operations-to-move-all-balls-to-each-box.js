/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const result = Array(boxes.length).fill(0);

  let balls = 0;
  let moves = 0;

  for (let i = 0; i < boxes.length; i++) {
    result[i] = balls + moves;

    moves = moves + balls;
    balls += boxes[i] == "1" ? 1 : 0;
  }

  balls = 0;
  moves = 0;
  for (let i = boxes.length - 1; i >= 0; i--) {
    result[i] += balls + moves;

    moves = moves + balls;
    balls += boxes[i] == "1" ? 1 : 0;
  }

  return result;
};

console.log(minOperations("110")); // [1,1,3]
console.log(minOperations("001011")); // [11,8,5,4,3,4]
