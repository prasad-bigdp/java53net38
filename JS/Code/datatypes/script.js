// // // datatypes
// // // number
// // let a = 10.816569;
// // console.log(typeof a) //number
// // console.log(a)
// // console.log(a.toFixed(2))
// // console.log(a.toPrecision(4))
// // a= 25
// // console.log(a.toString(3))
// // // math methods
// // console.log(Math.abs(-10))
// // console.log(Math.sqrt(16))
// // console.log(Math.cbrt(27))
// // console.log(Math.pow(2,3), 2**3)
// // console.log(Math.max(2, 5, 7, 8, 11, 11));
// // console.log(Math.min(2, 5, 7, 8, 11, 11))
// // console.log(Math.ceil(-2.1))
// // console.log(Math.floor(2.8))
// // console.log(Math.round(2.5))
// // console.log(Math.random())
// // //JS code to get ludo dice
// // console.log(Math.ceil(Math.random() * 6))
// // // i want between 10 to 20
// // console.log(Math.ceil(Math.random() * 10) + 10)
// // // generate 4 digit OTP
// // console.log(Math.ceil(Math.random() * 10000) )
// console.log("#"+Math.round(Math.random() * 10000000).toString(16))

// document.body.style.backgroundColor =
// 	"#" + Math.round(Math.random() * 10000000).toString(16)




// let str = "shekhar";
// console.log(typeof str) //string
// str = 'raj';
// console.log(typeof str) //string
// console.log("The time is 4 o' clock");
// console.log('The gandhi said, "good night"')
// str = `john`
// console.log(typeof str) //string
// na = "prasad"
// console.log("my name is " + "na")
// console.log(`The name is ${na}`)
// let a = 20, b = 25;
// console.log(`The sum of ${a} and ${b} is ${a + b}`);


//String methods
//In JS , strings are immutability
let s = "Prasa d";
console.log(s.toUpperCase());
console.log(s);
console.log(s.toLowerCase())
console.log(s.length)
s = " js is simple "
console.log(s.trim())
console.log(s.concat(" and easy"))
s="prasad"
console.log(s.charAt(0))
console.log(s.indexOf('a'),s.lastIndexOf('a'))
console.log(s.slice(3, 5))
console.log(s.startsWith("pr"))
console.log(s.endsWith("ad"))
//split
s = "js is easy"
console.log(s.split(" "))

// find spaces
console.log(s.split(" ").length - 1)

s = "aprasad";
// find a
console.log(s.split("a").length - 1)

// find number of vowels ,spaces, and consonants in given string
let x = prompt("Enter a string");
x = x.toLowerCase();
let sp = x.split(" ").length - 1;
let v = x.split("a").length - 1 + x.split("e").length - 1 + x.split("i").length - 1 + x.split("o").length - 1 + x.split("u").length - 1
let c = x.length - (sp + v);
console.log(`${x} have ${sp} spaces,${v} vowels and ${c} consonants`)




























