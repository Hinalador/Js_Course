let saludoUno = "Hola pequeña gran mierda"
let myName = "Manuel"
let primerTexto = saludoUno + ", " + myName
let textoVario = `Ejemplo de texto
en varias lineas
para el ejercicio`
let replaceText = primerTexto.replace(/ /g, "-")

console.log(primerTexto)
console.log(primerTexto.length)
console.log(primerTexto[0])
console.log(primerTexto[31])
console.log(primerTexto.toLocaleLowerCase())
console.log(primerTexto.toLocaleUpperCase())
console.log(textoVario)
console.log(`Hola mi nombre es ${myName}!`)
console.log(replaceText)

if (primerTexto.includes("Manuel")) {
    console.log(`El texto contiene la palabra ${myName}`)
} else {
    console.log(`El texto no contiene la palabra ${myName}`)
}

// Comparacion de textos sin tener en cuenta mayúsculas y minusculas
let text1 = "Hola mundo"
let text2 = "hola mundo"

if (text1.toLowerCase() == text2.toLowerCase()) {
    console.log("Los textos son iguales")
} else {
    console.log("Los textos no son iguales")
}