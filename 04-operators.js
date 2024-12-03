//Operadores

//Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b)//suma
console.log(a - b)//resta
console.log(a * b)//multiplicación
console.log(a / b)//división

console.log(a % b)//módulo
console.log(a ** b)//Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparación
console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == a) //Igualdad por valor
console.log(a === a)//Igualdad por identidad (tipo y valor)
console.log(a != a)
console.log(a !== a)

//Operadores logicos

//and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

//not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//Operadores ternarios
const isRaining = true
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")