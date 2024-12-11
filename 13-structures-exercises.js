//array de animales

let animalArray = ["Tigre", "Pantera", "Rinoceronte", "Bufalo", "Ballena"]
console.log(animalArray)

//añadir animal al inicio y al final
animalArray.unshift("Tiburón")
console.log(animalArray)

animalArray.push("Dinosaurio")
console.log(animalArray)

//Eliminar el que se encuentra en tercera posición

animalArray.splice(2, 1)
console.log(animalArray)

//set que almacene 5 libros

let libroSet = new Set(["Atomic habits", "Voyagers", "El perfume", "Farenheit 451", "El retrato de Dorian Gray"])
console.log(libroSet)

//añadir un libro más y un libro repetido

libroSet.add("El diario de Anna Frank", "El retrato de Dorian Gray")
console.log(libroSet)

//eliminar uno de ellos
libroSet.delete("El retrato de Dorian Gray")
console.log(libroSet)

//mapa asociando el número de mes a su nombre

let monthMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(monthMap)

//verificar si el mes 5 existe en el mapa e imprimir su valor
console.log(monthMap.has(5))
console.log(monthMap.get(5))

//añadir un array al map que contenga los meses de verano
monthMap.set("Meses de verano", [6, 7, 8])
console.log(monthMap)

//Crear un array, convertirlo a set y almacenar en map

//creación de array
let arrArray = [1, 2, 3, 4, 5]
console.log(arrArray)

//creación de set
let setSet = new Set(arrArray)
console.log(setSet)

//Almacenar en map

monthMap.set("Fusión de cosas", setSet)
console.log(monthMap)