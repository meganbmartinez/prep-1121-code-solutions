var person = {
  firstName: 'Zoey',
  lastName: 'Deschanel',
  hobby: 'Ukelele Playing'
};

var firstName = person.firstName;
console.log('firstName:', firstName);

var lastName = person.lastName;
console.log('lastName:', lastName);

var hobby = person.hobby;
console.log('hobby:', hobby);

console.log(person);

/* JavaScript String Operators Start */

var fullName = firstName + ' ' + lastName;
console.log("The person's name is:", fullName);

person.job = 'Elementary School Teacher Actress';

var job = person.job;
console.log("The person's current job is:", job);

person.previousJob = 'Musician';

var previousJob = person.previousJob;
console.log("The person's previous job is:", previousJob);

console.log('The complete person object:');
console.log(person);
