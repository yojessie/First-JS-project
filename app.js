// 2.2 variables
const a = 5;
const b = 2;
const myName = 'Jessie';

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log('This is ' + myName);





// 2.3 const and let (+var)
// const 재선언 금지, 재할당 금지 >> always
// let 재선언 금지, 재할당 가능 >> sometimes
// var 재선언 가능, 재할당 가능 >> never use

let anotherName = 'Jessie';
console.log('This is ' + myName);

anotherName = 'Subin'; // also you dont have to use 'let' repeatedly

console.log('Now, this is ' + myName);





// 2.4 booleans
// true = 1
// flase = 0
// null = 값이 없음. 비어있음 (We use null to make sure something that is nothing.)
// undefined = 값이 정의되지 않음. 컴퓨터가 인지하고 있지만 값이 없음

const amIFat = null; //의도적으로 값을 넣지 않음 = null
let areYouFat; //값을 정의하지 않음 = undefined (+ const로는 값이 없는 variable이 안만들어진다)

console.log(amIFat);
console.log(areYouFat);





// 2.5 Arrays
// Arrays can have variables, boolean, text, number.. any type of data
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Get item from Array
console.log(daysOfWeek);
console.log(daysOfWeek[3]); //computer count from 0

// Add one more day to the array
daysOfWeek.push('sun');

console.log(daysOfWeek);