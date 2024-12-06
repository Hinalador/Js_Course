//Nombre
let myName = "Nombre correcto"

if (myName === "Nombre correcto") {
    console.log("Manuel")
} else {
    console.log ("Nombre incorrecto")
}

//User and password
let user = "jacevedosalazar@gmail.com"
let password = "1035970555Jmas2004"

if (user == "jacevedosalazar@gmail.com" && password == "1035970555Jmas2004"){
    console.log("Bienvenido, el usuario y contraseña son correctos")
} else {
    console.log("Credenciales incorrectas")
}

//Number
let number = 1

if (number > 0){
    console.log("El numero es positivo")
} else if (number < 0){
    console.log("El número es negativo")
} else {
    console.log("El número es igual a 0")
}

//Vote

let ageBudd = 17

if (ageBudd >= 18) {
    console.log("La persona puede votar, es mayor de edad")
} else if (ageBudd >= 0 && ageBudd < 18) {
    console.log("La persona es menor de edad y le faltan " + (18 - ageBudd) + " años para poder votar")
} else {
    console.log("La edad no es valida")
}

//ternario

let searchAge = 18
const message = searchAge <= 17 ? "Menor" : "Adulto"
console.log(message)

//Station
 let mes = 4

 if (mes == 12 || mes == 1 || mes == 2){
    console.log("Estamos en invierno")
 } else if (mes == 3 || mes == 4 || mes == 5) {
    console.log("Estamos en Primavera")
 } else if (mes == 6 || mes == 7 || mes == 8){
    console.log("Estamos en Verano")
 } else if (mes == 9 || mes == 10 || mes == 11) {
    console.log("Estamos en Otoño")
 } else {
    console.log("El valor no es valido. Introduzca un número del 1 al 12")
 }

//Days of month
if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    console.log("Este mes tiene 31 días.");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("Este mes tiene 30 días.");
} else if (mes === 2) {
    console.log("Este mes tiene 28 días (o 29 si es año bisiesto).");
} else {
    console.log("El valor ingresado no es válido. Introduce un número del 1 al 12.");
}