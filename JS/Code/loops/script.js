// // using while loop print numbers 1 to 10 in console
// let i = 1;
// while (i <= 10)
// {
//     console.log(i);
//     i++;
// }
// // using while print only even numbers from 1 to 20.
// i = 1;
// if (i % 2 != 0)
//     i += 1
// while (i <= 20)
// {
//     console.log(i);
//     i+=2;
// }
// // using while generate random dice(1-6 values), but stops it once the value is 6. also print the number of attempts to get 6

// let attempt = 0;
// while (true)
// {
//     let value = Math.ceil(Math.random() * 6);
//     console.log(value)
// 		attempt++
//     if (value == 6)
//         break;
    
// }
// console.log(`no of attempts are: ${attempt}`);





/* for(initialization;condition;updation)
{
   body
}*/
//using for loop print 1 to 20 numbers in reverse
// for (let i = 20; i >= 1; i--)
// {
//     console.log(i)
// }

// //print 
// let arr = [5,4,3,8,4,2];
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }
// // for...of
// for (let i of arr)
// {
//     console.log(i)
// }
// // for...in
// for (let i in arr)
// {
//     console.log(i)
// }
// i. Take an array, [5,2,3,4,6]. find sum & product of elements in array
// ii. Take a number , check whether given number is armstrong or not
//153 = 1^3+5^3+3^3
// iii. Write basic JS to print below pattern
/* 1
   1 2
   1 2 3
   1 2 3 4 */

let arr = [5, 2, 3, 4, 6], sum = 0, p = 1;
for (let i of arr)
{
    sum += i;
    p *= i;
}
console.log(`Sum = ${sum}, Product= ${p}`);

// ARMSTRONG
let num = +prompt("enter a number");
let temp = num;
let d = num.toString().length; let x=0;
while (num > 0)
{
    let ld = num % 10;
     x = x + (ld ** d);
    num = parseInt(num / 10);
} 
if (temp == x)
    console.log("armstrong")
else
    console.log("not armstrong")

// pattern

for (let r = 1; r <= 4; r++)
{
    let s = ''
    for (let c = 1; c <= r; c++)
    {
        s= s+c+" "
    }
    console.log(s)
}


























