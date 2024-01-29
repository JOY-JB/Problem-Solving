// =================================== Problem 1 ==================================
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEven = (arr) =>{
  return arr.reduce((prev, curr)=> {
    if (curr % 2 === 0) {
      return prev + curr
    } 
    return prev
  } ,0)
}

// console.log(sumOfEven(numbers));



// =================================== Problem 2 ==================================
// Write a function that determines whether a given year is a leap year.

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true
      } else {
        return false
      }
    }
    else {
      return true
    }
  } else {
    return false
  }
}

const checkLeapYear = 2020

// console.log(`${checkLeapYear} is a leap year : `, isLeapYear(checkLeapYear));



// =================================== Problem 3 ==================================
// Write a function that counts the number of vowels in a given string. Example: Happy New Year

const countVowels = (str)=> {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }

  return count
}

// console.log(countVowels("Happy New Year"));




// =================================== Problem 4 ==================================
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbersArr = [1, 2, 3, 4, 2, 5, 6, 3, 4, 7];



const filterOutDuplicates = (arr) =>{
  
  return [...new Set(arr)]
}


// console.log(filterOutDuplicates(numbersArr));



// =================================== Problem 5 ==================================
// Write a function that takes an array of numbers and returns the maximum value.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const maxValByMath = (arr) =>{
  return Math.max(...arr)
}

// =================================== OR By Using Reduce ==================================

const maxValByReduce = (arr) =>{
  let max = arr[0] 
  arr.reduce((prev, curr)=>{
     max =  prev > curr ? prev : curr

     return max
  }, arr[0])

  return max
} 


// console.log(maxValByReduce(numbersArray));





// =================================== Problem 6 ==================================
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.


const students = [
  { name: 'John', grades: [80, 90, 75] },
  { name: 'Jane', grades: [95, 85, 92] },
  { name: 'Bob', grades: [70, 80, 65] }
];


const sortByAvgGrade = (arr) =>{
  return arr.sort((student1, student2)=>{
    const avg1 = (student1.grades.reduce((prev, curr)=> (prev + curr), 0)) / student1.grades.length
    const avg2 = (student2.grades.reduce((prev, curr)=> (prev + curr), 0)) / student2.grades.length
    
    return avg2 - avg1
  })
}


// console.log(sortByAvgGrade(students))


// =================================== Problem 7 ==================================
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.


const products = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 5 },
  { quantity: 1, price: 8 }
];


const totalValue = (arr) => {

  return arr.reduce((total, currObj) => {
    return total + (currObj.quantity * currObj.price)
  },0)

}


// console.log(totalValue(products));









// =================================== Problem 8 ==================================
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.





const combineArr = (arr1, arr2) =>{
  const newArr = []

  for(let el of arr1){
    if (arr2.includes(el)) {
      newArr.push(el)
    }
  }


  return newArr
}



const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];


// console.log(combineArr(array1, array2));