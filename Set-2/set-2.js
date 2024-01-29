// =================================== Problem 1 ==================================
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.



const people = [
    { name: "bondhu-1", age: 25, gender: "male" },
    { name: "bandhobi-1", age: 30, gender: "female" },
    { name: "bondhu-2", age: 26, gender: "male" },
    { name: "bandhobi-2", age: 22, gender: "female" },
    { name: "bandhobi-3", age: 31, gender: "female" },
  ];

const printNames = (array)=>{
    const females = array.filter(person => person.gender !== "female")
    
    const names = females.map(person => person.name)
    return names
}


console.log(printNames(people));



// =================================== Problem 2 ==================================
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
  ];


  const bookTitle = (array) => {
    return array.map(book => book.title)
  }

// console.log(bookTitle(books));



// =================================== Problem 3 ==================================
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


const sqrNumber = number => number * number

const doubleNumber = number => 2 * number

const addFiveWithNumber = (number) => 5 + number

const  composeFunctions  = (number) => addFiveWithNumber(doubleNumber(sqrNumber(number)))


// console.log(composeFunctions(5));



// =================================== Problem 4 ==================================
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


const cars = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Honda", model: "Civic", year: 2021 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "nissan", model: "classic", year: 2019 },
 ];

const sortArr = (arr) => {
  return  arr.sort((car1 ,car2)=> car1.year - car2.year)
} 

// console.log(sortArr(cars));


// =================================== Problem 5 ==================================
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 }
];

const searchAndModifyAge = (persons, name, newAge) =>{
  return persons.map(person => {
     if (person.name === name) {
      return {...person, age: newAge}
   }
   return person
  })
}

// console.log(searchAndModifyAge(persons, "John", 35));