// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// Example completed by Austin during class


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer:
//  I think the outcome will be 10

// b) Verify and explain:
// My personal answer was correct. The `.length` property returns the total number of characters within a string.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:
// I think the outcome will be 'o'. From my knowledge, strings are 0 indexed similar to an array. Counting each character from a string starts from 0 to however long the string/array is.

// b) Verify and explain:
// My personal answer was correct. We accessed the string by using square brackets and a number to access a specific index of the string (also known as index notation).


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:
// I think the outcome will be 'Ruby'

// b) Verify and explain:
// My personal answer was correct. By using index notation once again. By using square brackets and a number to represent the index we want to access, we are able to retrieve the contents of the 1 index position of an array, which was 'Ruby'.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
// I believe an error will pop up. From my knowledge, the `.toUpperCase()` is a string method and only works on strings.

// b) Verify and explain:
// My personal answer was correct. The `.toUpperCase()` method will not work on an array. The method does not function this way, it does not know how to get into an array and uppercase each individual string within the array. I believe the desired answer would be achieved by iterating through the array using a for or while loop and using the method on each iteration of the array


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:
// I think the answer will be a data type of either number or integer.

// b) Verify and explain:
// My personal answer was correct. From my knowledge, the keyword 'typeof' displays the datatype of what is next to it. Since dataTypes.length will return an integer.
