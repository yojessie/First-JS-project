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
// 앞에 업데이트 된 값에서 다시 +가 된다.
// 콘솔에서 해당 이름의 오브젝트를 펼쳐보면 업데이트 전 console.log에도 최종 업데이트 값이 들어있음

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





// 3.0 ~ 3.1 HTML in Javascript
document.title = 'I can change the title';
// I can change the title of document from Javascript

const title = document.getElementById('title');
// Javascript can select the elements in HTML

title.innerText = 'It changed from Javascript';
// and also can change it





// 3.2 Searching for Elements
const apple = document.querySelector('.apple p')

console.log(apple);
// apple.innerText = 'banana'; 텍스트 내용 변경 테스트

// getElementsByClassName('class-name'); 많은 element를 array로 가져옴
// getElementsByTagName('name'); 해당 name이 할당된 element를 가져옴

// getElementById('id');
// querySelector('#id'); 위와 동일한 결과
// querySelector('.apple h1'); CSS selector 방식으로 element를 가져옴 & 첫 element만 가져옴
// querySelectorAll('.apple h1'); 동일한 조건의 elements를 array로 가져옴





// 3.3 Events (3.2에 정의된 variable 이용)
function handleAppleClick() {
    console.log('It was clicked!');
    // 클릭했을때 뭘 할지 function으로 먼저 정의

    // or can use
    // apple.style.color = 'blue';
}

apple.addEventListener('click', handleAppleClick);





// 3.6 CSS in Javascript
const peach = document.querySelector('.peach p');

console.log(peach); //선택자가 잘 잡혔나 확인

function handlePeachClick() {
    peach.classList.toggle('active');
    
    // const activeClass = 'active'

    // if (peach.classList.contains(activeClass)){
    //     peach.classList.remove(activeClass);
    // } else {
    //     peach.classList.add(activeClass);
    // }
    // // className : 선택자의 class를 교체해버림
    // // classList : 선택자에있는 class를 확인함
    // // 위 function은 자주 쓰이는 코드이므로 toogle로 간단하게 대체사용이 가능
}

peach.addEventListener('click', handlePeachClick);