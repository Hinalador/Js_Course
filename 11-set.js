//set

//Declaración

let mySet = new Set()

//Inicialización

mySet = new Set(["Juan", "Manuel", "Acevedo", 20, true])
console.log(mySet)

//Metodos comunes

mySet.add("Marlene")
console.log(mySet)

mySet.delete("Marlene")
console.log(mySet)

console.log(mySet.delete("Juan"))
console.log(mySet)

//has

console.log(mySet.has("Manuel"))
console.log(mySet.has("Marlene"))

//Size

console.log(mySet.size)

// Convertir de set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir de array a set

myset = new Set(myArray)
console.log(mySet)

//la funcion Set no admite duplicar elementos