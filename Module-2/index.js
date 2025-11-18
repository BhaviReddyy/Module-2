function isEvenOrOdd(num) {
    return num % 2 === 0;
}
const number1 = 10;
const is10Even = isEvenOrOdd(number1);
console.log(`${number1} is Even: ${is10Even}`);

const number2 = 7;
const is7Even = isEvenOrOdd(number2);
console.log(`${number2} is Even: ${is7Even}`);

const number3 = 0;
const is0Even = isEvenOrOdd(number3);
console.log(`${number3} is Even: ${is0Even}`);