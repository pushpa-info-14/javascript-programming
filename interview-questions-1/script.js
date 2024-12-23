console.log("Hi");

let data = [1, 2, 3, 4, 5];

let result = data.map((el) => {
  return el > 2;
});

console.log(result);

let r = data.reduce((pervious, current) => {
  return current + pervious;
});

console.log(r);

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

//=================================
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

for (let i = 0; i < array1.length; i++) {
  array1[i] = array1[i] + array2[i];
}

console.log(array1);

//====================================
const array3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenArray = [];

array3.forEach((element) => {
  element.forEach((el) => {
    flattenArray.push(el);
  });
});

console.log(flattenArray);

//==================================
const sen = "hello world";

var s = sen.split(" ");
s.forEach((el) => {
  const u = el.split("");
  u[0] = el[0].toUpperCase();
  console.log(u.join(""));
});

//========================
const obj = {};
const obj1 = {
  name: "pushpa",
};
const obj2 = {
  name: "kumara",
};
obj[obj1] = {
  name: "pushpa new",
};
obj[obj2] = {
  name: "kumara new",
};

console.log(obj);
console.log(obj[obj1]); // { name: "kumara new" }

//============================
console.log(isNaN("pushpa"));
console.log(!"pushpa");
console.log(+false);

//========================
const a = [1, 2, 3, 4, 5];
const myFn = (b, ...a) => {
  console.log(a);
};

myFn(6, 7, 8, 9);
