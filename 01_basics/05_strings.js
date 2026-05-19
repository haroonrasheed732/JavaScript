const name = "Haroon"
const repoCount = 12

console.log(name+repoCount)


console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)
const name1 = new String("haroon")
console.log(name1[2])

console.log(name.charAt(2))//we can tract letters throgh  index number
console.log(name1.substring(0,3))//slicing



let newName = "   Haroon RASHEED"
console.log(newName)
console.log(newName.trim())//trim spacing remove kar dyta hy starting or ending waly



const url = "https://hitesh.com/hitesh%20choudary" // mjhe %20 ko hata - dyna hy

url.replace('%20','-')

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(name1.split('-')) //split karwaya '-' sy....

