/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const count2 = Array(26).fill(0);

  for (let word of words2) {
    let temp = Array(26).fill(0);
    for (let c of word) {
      temp[c.charCodeAt(0) - 97] += 1;
      count2[c.charCodeAt(0) - 97] = Math.max(
        count2[c.charCodeAt(0) - 97],
        temp[c.charCodeAt(0) - 97]
      );
    }
  }

  const result = [];

  for (let word of words1) {
    const count1 = Array(26).fill(0);
    for (let c of word) {
      count1[c.charCodeAt(0) - 97]++;
    }

    let flag = true;

    for (let i = 0; i < 26; i++) {
      if (count1[i] < count2[i]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result.push(word);
    }
  }

  return result;
};

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
);
console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"])
);
console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["e", "oo"]
  )
);
console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["lo", "eo"]
  )
);
console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["e", "oo"]
  )
);
