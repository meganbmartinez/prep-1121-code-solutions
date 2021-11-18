function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

function addTwoNumbers(x, y) {
  return x + y;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

function cube(number) {
  return number * number * number;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var addMult5 = addAndMultiplyBy5(10, 5);
console.log('Add & Multiply by 5:', addMult5);

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

var cubeNum = cube(5);
console.log('cube', cubeNum);

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

var fullName = getFullName('Juan', 'Ramirez');
console.log('Full Name:', fullName);

var greeting = getGreeting('World');
console.log('Greeting:', greeting);

var multDivide5 = multiplyAndDivideBy5(35, 10);
console.log('Multiply & Divide by 5:', multDivide5);

var difference = subtractTwoNumbers(22, 7);
console.log('difference', difference);
