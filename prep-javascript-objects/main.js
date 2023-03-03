const person = { firstName: 'Marc', lastName: 'Ting', hobby: 'watching TV' };
console.log(person);

const text1 = "The person's name is: ";
const fullName = 'Marc ' + 'Ting';
const text3 = text1 + fullName;
console.log(text3);

person.job = 'Sleeping';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Jumping';
console.log("The person's previous job is:", person['previousJob']);

console.log(person);
