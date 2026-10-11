"use strict";

// console.log(+'hi')
// console.log(String(4))
// console.log(String(6))

// console.log(Boolean(''))
// console.log(Boolean(' '))
// console.log(Boolean('0'))
// console.log(Boolean(0))
// console.log(Boolean(+'ali'))
// const passTest=false
// const goodVision=false
// console.log(passTest && goodVision)
// console.log(passTest || goodVision)

// const passTest = true;
// const goodVision = true;
// let haveDriverLicense = false;
// if (passTest && goodVision) {
//   haveDriverLicense = true;
// }
// console.log(haveDriverLicense);
// const day = prompt('enter day').toLowerCase()
// switch (day) {
//   case "fri":
//     console.log("last work day");
//     break;
//   case "sat":
//   case "sun":
//     console.log("weekend");
//     break;
//   case "mon":

//     console.log("first work day");
//     break;
//   case "thu":
//   case "tue":
//   case "wed":
//     console.log("work Day");
//     break;
//   default:
//     console.log("wrong entry");
// }

// // condition ? condition true : condition false
// // condition1 ? condition1 true : condition 2 ? condition2 true : condition2 false
// let age=19
// const fullAge2= age>=18 ? 'adult':'child'
// let fullAge;
// if(age>=18){
//     fullAge='adult'
// }else{
//     fullAge='child'
// }
/**
 *  >=70 retirement
 * 60<=x<70 near retirement
 * 18<=x<60 n year to retirement
 * =>dont work
 */

// // let birthYear = prompt();
// // let age = 2026 - birthYear;
// // let resultRetirement =
// //   age >= 70
// //     ? "retirement"
// //     : age >= 60 && age < 70
// //       ? "near retirement"
// //       : age >= 18 && age < 60
// //         ? `${70 - age} years to retirement`
// //         : "dont work";
// // console.log(resultRetirement);
// logger();
// function logger() {
//   console.log("hi");
// }
// logger();
// logger();

// function sqrt(a, b) {
//   return a ** b;
// }
// let result = sqrt(3, 2);
// console.log(result);
// console.log(sqrt(4, 6));

// function fruitProcessor(orange, apple, fullName) {
//   const appleSlice = cutFruit(apple);
//   const orangeSlice = cutFruit(orange);
//   const juice = `order for ${fullName}; with ${orangeSlice}
//     orange slice and ${appleSlice} apple slice`;
//   return juice;
// }
// function cutFruit(fruit) {
//   return fruit * 4;
// }
// const alirezaOrder = fruitProcessor(2, 4, "alireza aghaee");
// console.log(alirezaOrder);

// function calcAge(By){
//     return 2026-By
// }
// const calcAge=function(By){
// return 2026-By
// }
// const calcAge = (By) => {
//   let age = 2026 - By;
//   return age;
// };

// const calcAge = By =>2026 - By;

// const cutFruit = (fruit) => fruit * 4;
// const fruitProcessor = (orange, apple, fullName) =>
//   `order for ${fullName};
//    with ${cutFruit(orange)} 
//    orange slice and ${cutFruit(apple)} apple slice`;

// const isEven=num=>num%2==0
// console.log(isEven(32))
// console.log(isEven(11))
// console.log(isEven(prompt('')))


// const friend1='ali'
// const friend2='reza'
// const friend3='alireza'
const friends=['ali','reza','alireza']
console.log(friends)
console.log(friends[0])
console.log(friends.length)
console.log(friends[friends.length-1])
friends[0]='ahmad'
console.log(friends)
const arr=new Array(10).fill(1)
const arr2=new Array(10,'reza',6)
console.log(typeof friends)
console.log(Array.isArray(friends))