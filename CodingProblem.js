function isSumEvenOrOdd(number) {
    
    const givenNumbers = number.toString().split('');
    
    const sum = givenNumbers.reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    
    return sum % 2 === 0 ? 'even' : 'odd';
}

// Example 
const number = 12345;
console.log(`The sum is ${isSumEvenOrOdd(number)}.`);

//Example 2:
const number2 = 55;
console.log(`The sum is ${isSumEvenOrOdd(number2)}.`);

//Example 3:
const number3 = 105;
console.log(`The sum is ${isSumEvenOrOdd(number3)}.`);
