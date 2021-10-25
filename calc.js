// const clac = {
//     plus: function (a, b) {
//         console.log(a + b);
//     },

//     minus: function (a, b) {
//         console.log(a - b);
//     },

//     divide: function (a, b) {
//         console.log(a / b);
//     },

//     power: function (a, b) {
//         console.log(a ** b);
//     },
// }

// clac.add(5, 10);
// clac.minus(25, 5);
// clac.divide(30, 4);
// clac.power(2, 3);


// Return (#2.11)
const clac = {
    plus: function (a, b) {
        console.log('Do you wanna build a snow man?');
        return a + b;
        console.log('OKbye'); // return 뒤의 코드는 실행되지 않는다
    },

    minus: function(a, b) {
        return a - b;
    },

    divide: function(a, b) {
        return a / b
    },

    power: function (a, b) {
        return a ** b;
    },
}

const plusResult = clac.plus(2, 3);
const minusResult = clac.minus(plusResult, 5);
const divideResult = clac.divide(10, plusResult);
const powerResult = clac.power(divideResult, plusResult);

console.log(plusResult);
console.log(minusResult);
console.log(divideResult);
console.log(powerResult);





// Conditionals (#2.13)
// const ageTest = prompt('How old are you?');

// console.log(typeof ageTest); // variable의 type을 알 수 있는 코드
// console.log(parseInt(ageTest)); // 기본값인 string을 number로 바꿔주는 코드

const age = parseInt(prompt('How old are you?')); // Function은 안쪽 코드부터 바깥쪽으로 실행된다

console.log(age);
console.log(isNaN(age)); // Number의 여부를 boolean으로 보여주는 코드

if (isNaN(age) || age < 0) {
    console.log('Please write a real positive number');
} else if (age < 18) {
    console.log('You are too young to drink');
} else if (age >= 18 && age <= 50) {
    console.log('Enjoy your drink');
    // 조건 둘 다 충족하게 만들때 && 을 사용한다 (= And operator = And 연산자)
    // Or operaotr는 || 를 사용
} else {
    console.log('I am worrying about your condition');
}