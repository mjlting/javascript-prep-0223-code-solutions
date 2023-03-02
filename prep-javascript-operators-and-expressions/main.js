const number1 = 2;
const number2 = 2;
const product = number1 * number2;
console.log(product);
console.log(typeof product);

const charge = 4;
const payment = 3;
const amountRemaining = charge - payment;
console.log(amountRemaining);
console.log(typeof amountRemaining);

const tests = 5;
const assignments = 5;
const final = 5;
const grade = (tests + assignments + final) / 3;
console.log(grade);
console.log(typeof grade);

const firstName = 'Marc ';
const lastName = 'Ting';
const fullName = firstName + lastName;
console.log(fullName);
console.log(typeof fullName);

const pH = 4;
const isAcidic = (pH < 7);
console.log(isAcidic);
console.log(typeof isAcidic);

const numberOfSoldiers = 10;
const isSparta = (numberOfSoldiers === 300);
console.log(isSparta);
console.log(typeof isSparta);

let nickname = fullName;
console.log(nickname += ' is the GOAT');
console.log(typeof nickname);
