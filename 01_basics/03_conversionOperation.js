let score = "ab123"

console.log(typeof score)
console.log(typeof (score))

//abc letters bhi conversion as a num show karwae ga ky change hogaya hy
let valueInNumber = Number(score)
console.log(typeof valueInNumber)

//but actually nan output ae ga jb hum direct variable ko print karwaengy
console.log(valueInNumber)


let score1 = undefined

console.log(typeof score1)
console.log(typeof (score1))

//abc letters bhi conversion as a num show karwae ga ky change hogaya hy
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)

//but actually nan output ae ga jb hum direct variable ko print karwaengy
console.log(valueInNumber1)


let score2 = true

console.log(typeof score2)
console.log(typeof (score2))

//abc letters bhi conversion as a num show karwae ga ky change hogaya hy
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)

//but actually nan output ae ga jb hum direct variable ko print karwaengy
console.log(valueInNumber2)


//"33" converts => 33
//"33abc" converts => nan
// true =>1;false=>0

let isLoggedIn = 1 //result = true // 1 ky jagah "" result = false

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)



let num = 33

let Cnum = String(num)
console.log(typeof Cnum)


//********************Operations*********** */

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2);
console.log(2**2);

let str1 = "hello"
let str2 = "haroon"

let str3 = str1+str2
console.log(str3)




