//Array

//Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1]
myArray2 = new Array(1)
console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)
console.log(myArray)
console.log(myArray2)

myArray = ["Juan", "Manuel", "Acevedo", 20, true]
myArray2 = new Array("Juan", "Manuel", "Acevedo", 20, true)
console.log(myArray)
console.log(myArray2)

myArray2 = new Array(4)
myArray2 [0] = "Juan"
myArray2 [1] = "Manuel"
myArray2 [2] = "Acevedo"
console.log(myArray2)

myArray = []
myArray[0] = "Juan"
myArray[1] = "Manuel"
myArray[2] = "Acevedo"

console.log(myArray)

//Metodos comunes

myArray = []

//push y pop

myArray.push("Juan")
myArray.push("Manuel")
myArray.push("Acevedo")
myArray.push(20)

console.log(myArray)

console.log(myArray.pop()) //Elimina el ultimo valor y lo devuelve
myArray.pop()

console.log(myArray)

//Shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Marlene", "Juagonorrea")
console.log(myArray)

//Lenght

console.log(myArray.length)

//clear

// myArray = []
myArray.length = 0 //alternativa, pero no es recomendable
console.log(myArray)

//slice

myArray = ["Juan", "Manuel", "Acevedo", 20, true]

let myNewArray = myArray.slice(1,3)
console.log(myArray)
console.log(myNewArray)

//splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Juan", "Manuel", "Acevedo", 20, true]
myArray.splice(1, 2, "Nuevo elemento")
console.log(myArray)