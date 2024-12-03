let num1 = 10;
let num2 = 5;
/* // Declarar variables para dos números

// Crear una variable para cada operación
let suma = num1 + num2; // Suma
let resta = num1 - num2; // Resta
let multiplicacion = num1 * num2; // Multiplicación
let division = num1 / num2; // División
let modulo = num1 % num2; // Módulo (residuo)
let potenciacion = num1 ** num2; // Potenciación

// Mostrar los resultados en la consola
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Potenciación:", potenciacion); */

/* // Declarar la variable inicial
num1 = 10;

// Suma y asigna
num1 += 2; // 10 + 2 = 12
console.log("Después de += 2:", num1);

// Reiniciar num1
num1 = 10;
num1 -= 2; // 10 - 2 = 8
console.log("Después de -= 2:", num1);

// Reiniciar num1
num1 = 10;
num1 *= 2; // 10 * 2 = 20
console.log("Después de *= 2:", num1);

// Reiniciar num1
num1 = 10;
num1 /= 2; // 10 / 2 = 5
console.log("Después de /= 2:", num1);

// Reiniciar num1
num1 = 10;
num1 %= 2; // 10 % 2 = 0
console.log("Después de %= 2:", num1);

// Reiniciar num1
num1 = 10;
num1 **= 2; // 10 ** 2 = 100
console.log("Después de **= 2:", num1);
 */

num1 = 10;
num2 = 5;

// Verdaderas
console.log(num1 > num2);  // 10 es mayor que 5
console.log(num1 >= num2); // 10 es mayor o igual que 5
console.log(num1 !== num2); // 10 no es igual a 5
console.log(42 >= 42); // 42 es mayor o igual que 42
console.log(4 === 4); // 4 es igual a 4

// Falsas
console.log(num1 < num2);  // 10 no es menor que 5
console.log(num1 <= 5);    // 10 no es menor o igual que 5
console.log(num1 === 5);   // 10 no es igual a 5
console.log(77 <= 55);     // 77 no es menor o igual que 55
console.log(9 !== 9);      // 9 no es diferente de 9

console.log(9 < 5 && num1 == 10);      // uso de && en false
console.log(10 > 9 && num1 == 10);      // uso de && en true

console.log(num1 > 5 || num2 < 10);  // true, porque la primera condición es verdadera
console.log(num1 < 5 || num2 > 10);  // false, porque ambas condiciones son falsas

const tendrePlata = true
tendrePlata ? console.log("VOY A SER MILLONARIO") : console.log("VOY A SER UN POBRE DE MIERDA")