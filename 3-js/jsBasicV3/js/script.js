"use strict";
// const friends=['ali','reza','alireza']
// add element
// const newLength=friends.push('ahmad')
// console.log(newLength)
// console.log(friends)
// friends.unshift('keyvan')
// console.log(friends)
// // remove Element
// const removeItem=friends.pop()
// console.log(removeItem)
// console.log(friends)
// friends.shift()
// console.log(friends)
// //search
// console.log(friends.includes('keyvan'))
// console.log(friends.includes('ali'))
// console.log(friends.indexOf('keyvan'))
// console.log(friends.indexOf('ali'))
// const fName=prompt('enter Your Friend name')
// if(friends.includes(fName)){
//     console.log('exist')
// }else{
//     friends.push(fName)
//     console.log('add to friends list')
// }
// const friends = ["ali", "reza", "alireza"];
// const information=['alireza aghaee',1996,'web dev' ,friends]
// console.log(information[3][0])
// const information = {
//   fullName: "alireza aghaee",
//   birthYear: 1996,
//   job: "web dev",
//   friends,
//   calcAge() {
//     return 2026 - this.birthYear;
//   },
// };
// //json =>java script object notion
// //
// const x = "job";
// console.log(information);
// console.log(information.birthYear);
// console.log(information["friends"]);
// console.log(information[x]);
// information.city = "mashhad";
// // information.job='homeless'
// // delete information.birthYear
// console.log(information.calcAge());
// for (let i = 0; i <= 10; i++) {
//   console.log(`round ${i}`);
// }

// let num = [2, 4, 6, 43, 32, 12, 54, 23];
// let total = 0;
// for (let i = 0; i < num.length; i++) {
//   total += num[i];
// }
// console.log(total);

// let years=[2002,1990,1996,2005,2003]
// const ages=[]
// let totalAge=0
// for (let i = 0; i < years.length; i++) {
//     const age=2026-years[i]
//     totalAge+=age
//     ages.push(age)
// }
// const avg=totalAge/ages.length
// console.log(avg)
// console.log(ages)
let total=0
const nums=[32,54,-32,1,-21,3,5453,-423,0,32,54,-333]
for(let i =0 ;i<nums.length;i++){
    if(nums[i]<0){
        continue
    }else if(nums[i]==0){
        break
    }

    total+=nums[i]
}
console.log(total)
const bills=[120,80,140,190,40,60,200]
/**
 * array tip=> bill>=100 ?8% : 10%
 * array tip
 * total tip total bills total tip+bill
 */

// let i=0
// while(i<10){
//     console.log(i)
//     i++
// }
let randomNum=Math.trunc(Math.random()*6)+1

let x=19
x++
console.log(x)