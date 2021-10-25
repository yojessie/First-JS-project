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