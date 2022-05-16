# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer: A conditional statement is the foundation of decision making in coding. By using `if` / `else` conditional statements, code may result in different outcomes based on which condition is met. May be used in conjunction with logical, relational, or equality operators to achieve desired results.

  Researched answer: Conditionals are commands for handling decisions where different actions execute depending on whether the outcome of a Boolean condition is met (true or false). The minimum requirement for a conditional statment is the `if` keyword followed by a conditional. The logic behind `if` is like a switch where a condition is set and code will execute whether the condition is true or false. `else if` and `else` keywords may be used to set more conditions that will output different outcomes.
  - Reference: [Conditional Statements](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/conditionals.md)


1. What is git? What is the difference between git and Github?

  Your answer: `Github` (remote) is a web application that allows code to be stored on the cloud. a Developer or Developers are able to (lack of a better term) download this code and make changes to it using `git` (local). `Git`is a software that developers install on their terminal to be able to access code that is on `Github` by using `git` commands within their terminal. `Git` also takes snapshots of code so that developers have access to which developers can reference changes of code at different timelines.

  Researched answer: `Git` is a free, open-sourced version control system. If you are a developer, you should be using `Git` and `Github`. It is a very powerful tool that allows multiple developers to contribute to a singular code base without stepping on each others toes. Contributions are made separately and often go through revision before being implemented.
  - Reference: [Git and Github](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/github/github.md)


2. Which JavaScript operators will return a Boolean value?

  Your answer: There are 3 operators that have an outcome of a boolean value which are the following: Relational, Logical, and Equality operators.

  - Relational: Relational operators utilize the following character '>', '<', '<=' '>='

  - Logical: Logical operators utilize the following syntax '&&' (and) and '||' (or)

  - Equality: Equality operators utilize the following syntax '==' and '==='

  - Bang: Bang characters '!' denote that a conditional is the opposite

  Researched answer: Relational, Logical, and Equality operators return Boolean values. They are useful when making evaluations about data. These operators compare one value to another to determine if the condition is either true or false. Depending on the condition, a specific set of code will be ran and outputted.
  - Reference: [Conditionals](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/conditionals.md)
  - Reference: [Operators](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/intro.md)


3. What is an index? What is the difference between index and value?

  Your answer: An `index `refers to a specific position within an array or a string. Accessing a string or an array at a specific index grants / retrieves access to the data of that specific index, this data is also known as the `value` at that index

  Researched answer: An Array has index and values. `Indexes` are defined as a specific location. Arrays are '0 indexed' which means elements or items within the array are numbered starting with 0. A `value` (pertaining to arrays) is the data stored at a specific index. One of the benefits of using an array is that we are able to access values stored at a particular index using square brackets (bracket notation).
  - Reference: [Arrays](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/arrays.md)


4. What is iteration?

  Your answer: Iteration refers to traversing through data index by index. In order to do this the data must have some type of indexing. Used with a loop (`for` or `while`) a variable is set to act as an index that dynamically changes as the loop continues to run, accessing each item within the array or string individually. At this point, data may be accessed and modified in a myriad of ways.

  Researched answer: Iteration is an important concept in computer programming. "Iteration is the process of executing a block of code over and over again until a condition is met." For loops are an example of iteration, where combined with an array, code is executed a depending on how many values are within the array. The code block within the array may be ran for each item in the array.
  - Reference: [Arrays](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/arrays.md)
  - Reference: [Loops](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/loops.md)


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Pair programming is a technique in software development that involves two people: A 'Driver' and a 'Navigator'. Not only does this increase productivity, pair programming also promotes cooperation and relationships with peers, refinforces knowledge while learning new ideas through collaboration with their partners, and prevents bugs by having two sets of eyes on the code.

  Driver: The role of the driver shares their screen and is responsible for navigating through the files and typing everything that the navigator tells them to. However, ideas of both developers should be considered.

  Navigator: The role of the navigator is to tell the driver what to type and help research information on the side that will help develope code. The navigator helps oversee syntax as well as bugs.

  Both roles are equally important to each other.

  Researched answer: Pair programming is a technique that brings out the strengths of both developers working together which can lead to overall better solutions. Pair programming exercises cooperation and collaboration. The idea behind programming is that having a two sets of eyes makes it easier to catch mistakes and producing high-quality code. Pair Programming also promotes 100% focus since you are able to keep each other accountable and prevent cutting corners. Lastly, both devs that participate in Pair Programming are overall likely to deepen their understanding of programming by frequently communicating speaking and hearing correct syntax and terminology.
  - Reference: [Pair Programming](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/tools-and-resources/pair-programming.md)

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:
Reference: [Higher Order Functions](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/higher-order-functions.md)
- Higher-order functions are built-in array methods. Instead of accepting a primitive or compositive data type as an argument, Higher order functions accept a function as an argument.

2. Jest:
Reference: [Jest](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/jest.md)
- Jest is a testing framework for the JavaScript language. Jest is designed to ensure the 'correctness' of any JavaScript codebase. No code is complete without testing and test driven development.

3. Objects:
Reference: [Object](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/objects.md)
- "Objects are a JavaScript data type that has collections of `key` and `value` pairs. Objects also contain static information as well as actions (known as methods) that execute code. `properties` and `methods` of an object can be accessed using what is called `dot` notation.

4. Method:
Reference: [Methods](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/objects.md)
- Objects contain functions as well! BUT, pertaining to objects, a function that belongs to an object is called a `method`.

5. Classes:
Reference: [Classes](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/classes.md)
- Classes are a blueprint for objects. From a class, an unlimited number of objects can be made out of a class. Classes contains data and behavior of a specific type of object being created. For example, a class named `Automobile` would contain information about an automobile. What color it is, how many tires does it have, what gas does it take, what company is it made by, how fast does it go. All these properties of an automobile that is commonly shared by numerous types of other automobiles.
