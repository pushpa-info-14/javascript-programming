/**
 * Set
 * - Elements are unique
 * - Elements are unordered
 * - Usually implemented as a hash map
 *
 * Set - Algebra
 * - Union
 * - Intersect
 * - Difference
 * - Subset
 */

class SetAlgebra {
  static union(set1, set2) {
    const result = new Set(set1);
    set2.forEach((element) => {
      result.add(element);
    });

    return result;
  }

  static intersection(set1, set2) {
    const result = new Set();
    set1.forEach((element) => {
      if (set2.has(element)) {
        result.add(element);
      }
    });

    return result;
  }

  static difference(set1, set2) {
    const result = new Set();
    set1.forEach((element) => {
      if (!set2.has(element)) {
        result.add(element);
      }
    });

    set2.forEach((element) => {
      if (!set1.has(element)) {
        result.add(element);
      }
    });

    return result;
  }

  static subset(set1, set2) {
    for (let element of set2) {
      if (!set1.has(element)) {
        return false;
      }
    }
    return true;
  }
}

let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);

let set2 = new Set();
set2.add(3);
set2.add(4);
set2.add(5);

let set3 = new Set();
set3.add(3);

console.log(set1);
console.log(set2);
console.log(SetAlgebra.union(set1, set2));
console.log(SetAlgebra.intersection(set1, set2));
console.log(SetAlgebra.difference(set1, set2));
console.log("set2 is subset of set1: ", SetAlgebra.subset(set1, set2));
console.log("set3 is subset of set1: ", SetAlgebra.subset(set1, set3));
