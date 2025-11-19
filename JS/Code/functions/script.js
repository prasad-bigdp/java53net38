/*
function function_name (parameter) --> signature
{
    //body          -->body
}
    function_name(arguments)    --> call
*/
// function to add two numbers
function sum ()
{
    let a = 20, b = 30;
    console.log(a + b);
}
sum();
function sum2 (p, q=5)
{
    console.log(p,q)
    console.log(p+q)
}
sum2(10, 20, 30)
sum2(10)
let k = 10;
console.log(sum2);
 function sum3 (x, y)
{
    return x+y
}
let sum4 = function (x, y)
{
    return x+y
}
let res = sum3(5, 3)
console.log(res);

/* 
1. write a function that takes no_of_km as parameter and print the total charges as each km is ₹20. if km is not provided, take least one as 1.
eg: findTotalPrice(10) output:₹200
    findTotalPrice()   output:₹20

2. Write a function that takes a number and return its factorial. if the given number is negitive , return message "negitive numbers are not accepted"
eg: fact(5)  --> 120
    fact(-3) -->"negitive numbers are not accepted"

3. write a function that accepts a string and print in a pattern like below
eg: printPattern("Raju")
    output:
    R
    R a
    R a j
    R a j u */








