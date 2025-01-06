class Manacher {
  constructor() {
    this.p = [];
  }

  runManacher(s) {
    const n = s.length;
    const p = Array(n).fill(1);
    // console.log(p);

    let l = 1;
    let r = 1;
    for (let i = 1; i < n; i++) {
      //console.log(i, p[i], l + r - i, r - i, p[l + r - i]);
      p[i] = Math.max(
        0,
        Math.min(r - i, p[l + r - i] === undefined ? -1 : p[l + r - i])
      );
      while (i + p[i] < n && i - p[i] >= 0 && s[i + p[i]] === s[i - p[i]]) {
        p[i]++;
      }
      if (i + p[i] > r) {
        l = i - p[i];
        r = i + p[i];
      }
    }
    console.log(p);
    this.p = p;
  }
  build(s) {
    let t = "";
    for (let c of s) {
      t += "#" + c;
    }
    this.runManacher(t + "#");
  }
  getLongest(center, isOdd) {
    const pos = 2 * center + 1 + (isOdd ? 0 : 1);
    return this.p[pos] - 1;
  }
  checkPalindrome(l, r) {
    if (r - l + 1 <= this.getLongest((l + r) / 2, l % 2 === r % 2)) {
      return true;
    } else {
      return false;
    }
  }
}

let m = new Manacher();

m.build("babbabbabc");
console.log(m.checkPalindrome(0, 8));
