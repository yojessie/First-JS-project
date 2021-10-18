// 2.2 variables
const a = 5
const b = 2
const myName = 'Jessie'

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log('This is ' + myName);



// 2.3 const and let (+var)
// const 재선언 금지, 재할당 금지 >> always
// let 재선언 금지, 재할당 가능 >> sometimes
// var 재선언 가능, 재할당 가능 >> never use

let anotherName = 'Jessie'
console.log('This is ' + myName);

anotherName = 'Subin' // also you dont have to use 'let' repeatedly

console.log('Now, this is ' + myName);



