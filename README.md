# javascript_playground

//making objects

//object literal ({})

//making an object that doesn't need to be defined

var studentInfo = new Object();
// studentInfo.name = "Jacinta Powland";
// studentInfo.semester = "course 1";
// studentInfo.semester2 = "course 2";
// studentInfo.semester3 = "course 3";

// console.log(studentInfo.semester2)

// making an object with a function constructor example > first letter is capitalised which means it's a constructor

//function Book(name, year)
// {
//     this.name = name;
//     this.year = year;
// }

// var firstBook = new Book("ReactJS Ebook", 2016);
// var secondBook = new Book("Javascript Ebook", 2017);

// console.log(firstBook.name, firstBook.year);
// console.log(secondBook.name, secondBook.year);

// firstBook instanceof Book; // true
// secondBook instanceof Book; // true

//instance of is similar to type of in that it can check and give a boolean response 

//another way to create an object is object.create


// ES6 practice

// const calcArea = (radius) => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is', area);

const greet  = () => "hello, world";
const result = greet();
console.log(result);

const greet  = () => "hello, world";
const result = greet();
console.log(result);

// create a function that takes a boolean variable (true/false) and returns it as a string
//ex: toString(true) -> "true"

// function covToString(str) {
//   return str.toString();
// }
// console.log(typeof(covToString(true)))

// create a function that takes two strings as args
//and return either true or false depending on the total number of characters
//first string is equal to the total number chars of second string

//ex: compareTwoStrings("AB", "CD") -> true
//ex: compareTwoStrings("ABC", "DE") -> false

// function compareTwoStrings(strOne, strTwo) {
//     return strOne.length === strTwo.length

// }

// console.log (compareTwoStrings("Tim", "Tom"))