let age=20
age=21
const firstName='saleh'

const fName='saleh' //string
const idCode=987654321 //number
const haveDriverLicense=true //boolean
const x=null //null
let y //undefined

console.log(fName,haveDriverLicense)
console.log(typeof fName,typeof idCode)
const fullName=prompt('enter your fullName')
console.log(fullName)

const num1=10
const num2=5
console.log(num1+num2,num1-num2,num1*num2,num1/num2,num1**num2,num1%num2)

num1+=5
num1-=4
num1*=4
num1/=4
num1**=2 
num1%=3


const now=2026
const salehBirthYear=prompt('enter saleh birthYear')
const aliBirthYear=prompt('enter ali birthYear')
const salehAge=now-salehBirthYear
const aliAge=now-aliBirthYear
const avg=(aliAge+salehAge)/2
console.log(avg)

const fiName=saleh //first name
const laName=banihashemi //last name
const fuName=fiName+' '+laName //full name
console.log(fuName)

const number1=prompt('enter number 1')
const number2=prompt('enter number 2')
const number3=prompt('enter number 3')
const average=(+number1 + +number2 + +number3)


const a=10
const b='10'
console.log(a>b,a>=b,a<b,a<=b,a==b,a===b)
console.log(a!=b,a!==b)

const alirezaBirthYear=20
const isFullAge= alirezaBirthYear>=18


const mamadSalehFirstName='mohamad saleh'
const mamadSalehLastName='banihashemi'
const mamadSalehBirthYear=2008
const mamadsSalehJob='web dev'
// const information='my name is'+mamadSalehFirstName+'and my last name is '+mamadSalehLastName
const information =`my name is ${mamadSalehFirstName} and my last name is ${mamadSalehLastName} and my age is ${now-mamadSalehBirthYear} and my job is ${mamadsSalehJob}`


//null undefined 0 '' NaN => false

// if(){

// }else if(){

// }else if(){

// }else{

// }

let money=0
if(money){
    console.log('spent')
}else{
    console.log('work more')
}


