const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

// // Length of the array
// console.log(marvelHeroes.length); //Output: 5

// // Adding an element to the end of the array
// marvelHeroes.push("Spider Man");
// console.log(marvelHeroes); //Output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow

// // Accessing elements
// console.log(marvelHeroes[0]); //Output: "Iron Man


marvelHeroes.push(dcHeroes);
console.log(marvelHeroes) //Output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]]
const all_new_heros = [...marvelHeroes,...dcHeroes]
console.log(all_new_heros) //Output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]


const anotherArr = [1,2,3,[4,5,6],7,8,9]
const real_arr = anotherArr.flat()
console.log(real_arr) //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//conversion of let variable to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //Output: [100, 200, 300]