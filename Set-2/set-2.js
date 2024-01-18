// =================================== Problem 1 ==================================
// You have to print the following lines in the same format as –

// “Recently I heard that you’ve achieved 95% marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life!	Good luck with all the barriers(/\) in your life.”

const text = `Recently I heard that you’ve achieved 95% marks in your exam.
This is brilliant!
I wish you’ll shine in your life!	Good luck with all the barriers(/\\) in your life.`;

// console.log(text);

// =================================== Problem 2 ==================================
// You need to take two integer value inputs and display their sum, subtraction,

const calculation = (input1, input2) =>{
    console.log(`${input1} + ${input2} = ${input1 + input2}`);    
    console.log(`${input1} - ${input2} = ${input1 - input2}`);    
    console.log(`${input1} * ${input2} = ${input1 * input2}`);    
    console.log(`${input1} / ${input2} = ${(input1 / input2).toFixed(2)}`);    
}

// calculation(5, 2);



// =================================== Problem 3 ==================================
//  You have to take a non-negative (0 or greater) number and say whether the number is even or odd..

const oddOrEven = (input) =>{

    if (input < 0 || typeof(input) !== "number" ) {
        console.log("please enter a positive number!");
    }
    else if(input % 2  === 0){
        console.log(`even`);
    } else {
        console.log(`odd`);
    }
}

// oddOrEven(3)




// =================================== Problem 4 ==================================
// You need to take an integer value as input and tell if it is positive or negative or zero.

const checkNumber = (number) =>{
    if (number < 0) {
        console.log("negative");
    } else if (number > 0) {
        console.log("positive");
    } else {
        console.log("zero");
    }
}

// checkNumber(-1)



// =================================== Problem 5 ==================================
// Suppose a friend of yours tells you that he would buy a Gucci bag if he had Rs 10,000 or more. Otherwise if he has 5000 or more then he will buy Levis Bag. Otherwise he will buy something from New Market. He also told you that if he can buy a Gucci Bag and if he has more than 20 thousand rupees then he will buy another Gucci Belt.


const shoppingDecision = (amount) => {
    if (amount >= 10000) {
        console.log("Gucci Bag");
        
        if (amount > 20000) {
            console.log("Gucci Belt");
        }
    } else if (amount >= 5000) {
        console.log("Levis Bag");
    } else {
        console.log(
            "something"
        );
    }
}


// shoppingDecision(25400)