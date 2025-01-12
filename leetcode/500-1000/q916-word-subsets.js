/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  let dict1 = {};
  const dict2 = {};

  for (let word2 of words2) {
    let temp = {};
    for (let c2 of word2) {
      if (!temp[c2]) {
        temp[c2] = 1;
      } else {
        temp[c2] += 1;
      }
    }

    for (let key of Object.keys(temp)) {
      if (!dict2[key]) {
        dict2[key] = temp[key];
      } else {
        dict2[key] = Math.max(dict2[key], temp[key]);
      }
    }
  }

  const result = [];

  for (let word1 of words1) {
    dict1 = {};
    for (let c1 of word1) {
      if (!dict1[c1]) {
        dict1[c1] = 1;
      } else {
        dict1[c1] += 1;
      }
    }

    let flag = true;

    for (let key of Object.keys(dict2)) {
      if (!dict1[key] || dict2[key] > dict1[key]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result.push(word1);
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
