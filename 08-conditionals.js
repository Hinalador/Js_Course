// if, else if, else

// if (si...)

let age = 10

if (age == 20){
    console.log("El ciudadano tiene 20 años de edad, es mayor de edad")
}

// else (si no...)

if (age == 20){
    console.log("El ciudadano tiene 20 años de edad, es mayor de edad")
} else {
    console.log("El ciudadano no es mayor de edad")
}

// else if

if (age == 20){
    console.log("El ciudadano tiene 20 años de edad, es mayor de edad")
} else if (age < 18){
    console.log("El ciudadano no es mayor de edad")
} else{
    console.log("La edad no es 20 ni es menor de edad")
}

// Operadores ternarios

const message = age == 20 ? "La edad es 20" : "La edad no es 20"
console.log(message)

// Switch

let day = 8
let dayName

switch (day){
    case 0: 
        dayName = "Lunes"
        break
    case 1: 
        dayName = "Martes"
        break
    case 2: 
        dayName = "Miercoles"
        break
    case 3: 
        dayName = "Jueves"
        break
    case 4: 
        dayName = "Viernes"
        break
    case 5: 
        dayName = "Sabado"
        break
    case 6: 
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)