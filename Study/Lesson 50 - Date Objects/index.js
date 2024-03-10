// Date(year, month, day, hour, minute, second, ms)

const date1 = new Date();
console.log(date1);

const date2 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date2);

const date3 = new Date("2024-01-02T12:00:00Z");
console.log(date3);

const date4 = new Date(0);
console.log(date4);

const date5 = new Date(1700000000000);
console.log(date5);

const date6 = new Date();
console.log(date6.getFullYear());
console.log(date6.getMonth());
console.log(date6.getDate());
console.log(date6.getHours());
console.log(date6.getMinutes());
console.log(date6.getSeconds());
console.log(date6.getMilliseconds());
console.log(date6.getDay());

const date7 = new Date();

date7.setFullYear(2024);
date7.setMonth(2);
date7.setDate(10);
date7.setHours(12);
date7.setMinutes(52);
date7.setSeconds(5);
date7.setMilliseconds(150);

console.log(date7);

const date8 = new Date("2023-12-31");
const date9 = new Date("2024-01-01");

if(date9 > date8){
    console.log("Happy new year");
}