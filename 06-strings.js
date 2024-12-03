//Strings

//Concatenación de cadenas

let myName = "Manuel"
let greeting = "Hola gran perra triplehpta, " + myname + "!"

console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

//Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Manuel"))
console.log(greeting.indexOf("chimbo"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Manuel"))
console.log(greeting.includes("chimbo"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Manuel", "Marlene"))

// Template literals

let message = `Hola este es un intento de salto de linea
en js usando template literals`

console.log(`Hola mi nombre es ${myName}!`)