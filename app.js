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





// 2.6 Objects
// Different from Array. Because the Objects can have some meaning(property)
// 설명이 필요하지 않은 데이터 리스트들은 array로,
// 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!
const player = {
    name: 'Jessie',
    points: 10,
    cute: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']); // same result

// to change(update) and add property to the object
player.cute = false,
player.nickName = 'potato',
player.points = player.points + 15;

console.log(player);

player.points = player.points + 15;

console.log(player);





// 2.7 ~ 2.8 Functions
function sayHello(nameOfPerson, age) {
    console.log('Hello, my name is ' + nameOfPerson + ' and I am ' + age);
}
sayHello('Jessie', 33);
sayHello('Sun', 38);
sayHello('Young', 29);


function plus(a, b) {
    // The argument A and B are only exist in this function.
    console.log(a + b);
};
plus(8, 60);


// Use function in object
const character = {
    name: 'Jessie',
    greeting: function (friendName) {
        console.log('Hello, ' + friendName + '. Nice to meet you');
    },
};
character.greeting('Subin')

