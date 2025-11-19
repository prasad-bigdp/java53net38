//Control statements
//  simple if
/*if (condition)
{
    //body  -- runs only when condition is true
}*/
//Print only a value if it is greater than 10
// let a = +prompt("enter a value");
// if (a > 10)
// {
//     console.log(`${a} is greater than 10`)
// }
// check whether given number is even or odd
// let isEvenOdd = +prompt("Enter a number")
// if (isEvenOdd % 2 == 0)
//     console.log(`${isEvenOdd} is Even number`)
// else
//     console.log(`${isEvenOdd} is ODD number`)

//take one number from prompt and system should guess that number between 1 - 10;
// let randomNumber = Math.ceil(Math.random()*10)
// let userGuessNumber = +prompt("Guess the number and win ₹1000");
// if (randomNumber == userGuessNumber)
// {
//     console.log("congratulation, you won ₹1000")
// }
// else
// {
//     console.log(`oops! you lost ₹1000, the correct number is ${randomNumber}`);
// }

console.log("what is 2+2?");
console.log("1. 4 \n2.22 \n3.0 \n4.none of the above")
let answer = +prompt("enter user choice");
// if (answer == 1) console.log("correct answer")
// else if (answer == 2) console.log("Wrong answer")
// else if (answer == 3) console.log("Wrong answer")
// else console.log("wrong answer")


switch (answer)
{
    case 1: console.log("correct answer"); break;
    case 2: console.log("Wrong answer"); break;
    case 3: console.log("Wrong answer"); break;
    case 4: console.log("Wrong answer"); break;
    default: console.log("Enter a valid answer");
}





