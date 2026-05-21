//objects: declare two types 1/literal 2/constructor

//literal m signleton nhi banta

//object literal

const JsUser = {
    name : "Haroon",
    age : 25,
    location : "karachi",
    email : "abc@gmail.com",
    isLoggedIn :false,
    lastLoginDays:["Monday","Tuesday","Wednesday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])

//object.freeze(JsUser) //object ko freeze kr dia jaye to usme koi bhi change nhi hoga    

JsUser.greeting = function(){
    console.log(`Hello  ${this.name}`)
}
console.log(JsUser.greeting()); //Output: Hello Haroon;

JsUser.greetingtwo = function(){
    console.log(`ya dsora wala hy ${this.name}`);

}
console.log(JsUser.greetingtwo()); //Output: ya dsora wala hy Haroon


JsUser.introduction = function(){
    console.log(`My name is ${this.name}`);
    console.log(`my age is ${this.age}`);
    console.log(`I am residence of ${this.location}`);
    console.log(`you can contact throgh gmail ${this.email}`);
}

JsUser.introduction(); //Output: My name is Haroon my age is 25 I am residence of karachi you can contact throgh gmail
console.log(JsUser.introduction());




































//********************************* */

//object literal

const person = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person) //Output: { name: 'John', age: 30, city: 'New York' }

//object constructor
function Person(name,age,city){
    this.name = name
    this.age = age
    this.city = city
}
const person1 = new Person("Alice",25,"Los Angeles")
console.log(person1) //Output: Person { name: 'Alice', age: 25, city: 'Los Angeles' }

//accessing object properties
console.log(person.name) //Output: "John"
console.log(person["age"]) //Output: 30

//adding new property to object
person.country = "USA"
console.log(person) //Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }