//Dates

let myDate = new Date() //current date and time
console.log(myDate)
console.log(myDate.toString())//date ko string main convert krta hy

console.log(myDate.toDateString())//sirf date ly ga

console.log(myDate.toTimeString())//sirf time ly ga

console.log(myDate.toLocaleString())//local date and time ly ga

console.log(myDate.getFullYear())//sirf year ly ga

console.log(myDate.getMonth())//month ly ga 0 sy start hota hy

console.log(myDate.getDate())//day of the month ly ga

console.log(myDate.getDay())//day of the week ly ga 0 sy start hota hy

console.log(myDate.getHours())//hours ly ga

console.log(myDate.getMinutes())//minutes ly ga

console.log(myDate.getSeconds())//seconds ly ga

console.log(myDate.getMilliseconds())//milliseconds ly ga

let myTime = new Date().getTime() //current time in milliseconds since Jan 1, 1970
console.log(myTime)

let myCreateDate = new Date(2020, 0, 23) //specific date create krta hy (year, month, day)
console.log(myCreateDate)

console.log(myCreateDate.getTime())//specific date ka time in milliseconds since Jan 1, 1970

let myDate2 = new Date(2020, 0, 23, 10, 30, 0) //specific date and time create krta hy (year, month, day, hours, minutes, seconds)
console.log(myDate2)

console.log(myDate2.getTime())//specific date and time ka time in milliseconds since Jan 1, 1970

console.log(Date.now())