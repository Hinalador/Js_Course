//Map

//Declaración

let myMap = new Map()
console.log(myMap)

//Inicialización

myMap = new Map([
    ["name", "Manuel"],
    ["email", "Jacevedosalazar@gmail.com"],
    ["age", 20]
])

console.log(myMap)

//Metodos y propiedades

//set

myMap.set("alias", "Marlene")
myMap.set("name", "Juan Manuel")
console.log(myMap)

//get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

//has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//delete

myMap.delete("email")
console.log(myMap)

//keys
console.log(myMap.keys())

//values
console.log(myMap.values())

//size
console.log(myMap.size)

//entries

console.log(myMap.entries())

//clear

myMap.clear()
console.log(myMap)