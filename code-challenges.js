// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// Example completed in class by Austin.


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudocode
// Create a function
    // Name the function, will name the function 'boilingPoint'
    // Has 1 parameter, will name accept ANY given number, will name this parameter 'number'
// Within the function
    // Create conditionals in conjunction with relational operators using an if statement to determine if arguement is above, at, or below boiling point
    // Return the correct string using string interpolation based on the conditional that is met within the if statement

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (number) => {
    if(number > 212) {
        return `${number} is above boiling point`
    } else if(number === 212) {
        return `${number} is at boiling point`
    } else {
        return `${number} is below boiling point`
    }
}

console.log(boilingPoint(temp1)) // Output: 42 is below boiling point
console.log(boilingPoint(temp2)) // Output: 350 is above boiling point
console.log(boilingPoint(temp3)) // Output: 212 is at boiling point
console.log(boilingPoint(1000)) // Output: 1000 is above boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudocode
// Create a function
    // Name the function, will name the function 'combineArrays'
    // Has 2 parameters, will name the parameters 'array1', 'array2'
// Within the function
    // Create a variable to hold a newly created array with both arrays joined together, will name this variable/array 'combinedArrays'
    // Use the method `.concat()` to join arrays together
    // Create a variable to hold the length of the newly created array, will name this variable 'lengthOfCombinedArrays'
    // Use the method `.length` on the newly created array to retrieve the total number of items of the newly created array
    // Returns the length of the total items within the array of combined arrays

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const combineArrays = (array1, array2) => {
    let combinedArrays = array1.concat(array2)
    let lengthOfCombinedArrays = combinedArrays.length
    return lengthOfCombinedArrays
}

console.log(combineArrays(myNumbers1, myNumbers2)) // 10


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

// Pseudocode
// Create a function
    // Name the function, will name the function 'reverseString'
    // Has 1 parameter, will name the parameter 'givenString'
// Within the function
    // Create a variable named 'stringToArray'. Use the method `.split("")` to turn the given argument (givenString) into an array and assign it to this variable
    // Create a variable named 'reversedArray'. After the string has been turned into an array, use the method `.reverse()` to reverse the array (stringToArray) and assign it to this variable
    // Create a variable named 'reversedString'. After the string has been turned into an array and then reversed, use the method `.join()` to turn the array back into a string and assign it to this variable
    // Return the string in reversed form

const currentCohort = "Charlie 2022"

const reverseString = (givenString) => {
    let stringToArray = givenString.split("")
    let reversedArray = stringToArray.reverse()
    let reversedString = reversedArray.join("")
    return reversedString
}

console.log(reverseString(currentCohort)) // Output: 2202 eilrahC


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudocode
// Create a function
    // Name the function, will name the function 'evenOrOdd'
    // Has 1 parameter that will accept an array, will name the parameter 'arrayOfNumbers'
// Within the function
    // Create a for loop with the starting point at 0, ending point at the length of the parameter 'arrayOfNumbers', and increment this for loop by 1
    // Create a conditional in conjunction with relational and equality operators to determine if each iteration of the array is even or odd
    // Console.log each iteration


const myArray = [13, 34, 5, 10, 27, 42]

const evenOrOdd = (arrayOfNumbers) => {
    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] % 2 === 0){
            console.log("even")
        } else {
            console.log("odd")
        }
    }
}

evenOrOdd(myArray)
// Output: 
    // odd
    // even
    // odd
    // even
    // odd
    // even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudocode
// Create a function
    // Name the function, will name the function 'subtractNumbers'
    // Has 2 parameters that will accept numbers, will name the parameters 'num1' and 'num2'
// Within the function
    // Create a conditional in conjunction with relational operators to determine which number is bigger
    // Depending on the which number is bigger, subtract the smaller number from the bigger number

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtractNumbers = (num1, num2) => {
    if(num1 > num2){
        return num1 - num2
    } else if(num1 === num2){
        return 0
    } else {
        return num2 - num1
    }
}
console.log(subtractNumbers(number1, number2)) // Output: 42
console.log(subtractNumbers(number3, number4)) // Output: 3
