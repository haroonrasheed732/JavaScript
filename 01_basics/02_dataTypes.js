"use strict"; //treat all js code as newer version




//************************************* */
//primitive data types
//************************************* */


//1=>number => 2 to power 53
let age = 18
console.log(age)


//2=>bigint => agar num bara hy to ya use karte hn jaise trading or stockmarket m use hota hy
let bignumber = 11122233445678887667666n
console.log(bignumber)

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


//find type of anything
console.log(typeof"haroon");