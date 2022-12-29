import "./styles.css";

// JavaScript Fundamentals – Part 1
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let population = 33;
let language;
const isIsland = false;
const country = "Potugal";
console.log(isIsland);
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof isIsland);
console.log(typeof language);
// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

// const country = 'Portugal';
const continent = "Europe";
// const isIsland = false;
// isIsland = true;

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} below average`);

population = 13;
if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} below average`);

population = 130;
if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} below average`);

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
