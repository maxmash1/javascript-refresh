function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create function to get yesterday's date
function getYesterday() {
    var today = new Date();
    var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    return yesterday;
}

// create function to convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}

// create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// create an array of 5 names
const names = ['John', 'Jane', 'Joe', 'Jack', 'Jill'];

// create an array of 5 objects with id, name, and age
const people = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 28 },
    { id: 3, name: 'Joe', age: 32 },
    { id: 4, name: 'Jack', age: 26 },
    { id: 5, name: 'Jill', age: 24 }
];

// order people by age
const orderedPeople = people.sort((a, b) => a.age - b.age);
console.log(orderedPeople);

// get only people who's name starts with J and order by age ascending
const jPeople = people.filter(person => person.name.startsWith('J')).sort((a, b) => a.age - b.age);
console.log(jPeople);

