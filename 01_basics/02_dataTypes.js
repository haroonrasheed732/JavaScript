"use strict"; //treat all js code as newer version

//************************************* */
//Two category of Data Types
//1 : primitive data types
//2 : non primitive data types
//************************************* */


//************************************* */
//primitive data types
//************************************* */


//1=>number => 2 to power 53
let age = 18
console.log("meri age hy",age)




//2=>bigint => agar num bara hy to ya use karte hn jaise trading or stockmarket m use hota hy
let bignumber = 11122233445678887667666n
console.log("bigint example: "bignumber)

//3=>string => ""
let name = "haroon"
console.log(name)


//4=> boolean => true/false
let isLoggedIn = true
let isAdmin = false
console.log(isLoggedIn)



//5=>null =>standalone value =>representaion of empty value
let data = null
console.log(data)


//6=>undefined =>variable without value or not assigned any value
let user
console.log(user)


//7=> symbol => unique =>use for uniqueness
let id1 = Symbol("id")
let id2 = Symbol("id")
console.log(id1===id2); //false

//************************************* */
//non premitive data types(refernce)
//************************************* */

//1=>object --key value pairs
let person = {
    name : "Haroon",
    age:24
};
console.log(person.name)
console.log(person.age)


//2=>Array --> multiple values ko aek variable m rakhte hn
let fruits = ["Apple","banana","orange"]
console.log(fruits)
console.log(fruits.length)


//3=>Function --> function bhi js m object hota hy
function introduce(){
    console.log("My self haroon rasheed")
}
introduce();


//4=> typeOf Operator -->data check karne ky liye use hota hy
console.log(typeof"haroon");
console.log(typeof age)


//********************* */
//1=>stack memory(primitive)---variable declare kiya us ky copy milty hy kuch bhi chage karengy wo copy m change hoga
//2=>Heap memory(non-primitive)---refernce milta hy or jo bhi chne karengy wo orginal m change hoga


