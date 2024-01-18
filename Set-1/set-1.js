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

