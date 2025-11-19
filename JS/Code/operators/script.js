//Arithematic
console.log(2 + 3, 2 - 3, 2 * 3, 2 / 3, 2 % 3, 2 ** 3);
//relational
console.log(2 < 3, 2 > 3, 2 <= 3, 2 >= 3, 2 == '2',
2 === '2', 2 != '2', 2 !=='2')
//Logical
let a = 10, b = 20;
console.log(a > 5 && a < 50,
    a > 20 || a < 30,
    !(a>25)
)
// Assignment
a = 5;
a += 2; // a= a +2
console.log(a);
a -= 2 // a= a - 2
console.log(a) //5
a *= 2;
a = a / 2;
a = a % 2;
a = a ** 2;

//increment & decrement
a = 6
let x =++a + 4;
console.log(a)
a = 3, b = 4;
x = a++ + ++a + --b + b--;
console.log(x);

//special operators
console.log(5 + +'3')
console.log(typeof a);
a = undefined ?? 3;//nullish coelision operator
console.log(a)

//Ternary /conditional operator
let c = (a > 5) ? 10 : 20;
console.log(c);






























