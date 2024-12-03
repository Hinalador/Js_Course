/* // Comentario en una linea

//comentario
//en
//varias
//lineas

// Declaración de variables
let name = "Manuel";              // Tipo String
let number = 20;                  // Tipo Number
let nullValue = null;             // Tipo Null (pero typeof devuelve 'object')
let isGay = false;                // Tipo Boolean
let aaaaa;                        // Tipo Undefined (no asignada)
let simbolo = Symbol("mi simbolo"); // Tipo Symbol
let bigIntin = BigInt(65165165111651651651651616515564848949498498489498498498); // Tipo BigInt

// Imprimir valores
console.log(name);                // Manuel
console.log(number);              // 20
console.log(nullValue);           // null
console.log(isGay);               // false
console.log(aaaaa);               // undefined
console.log(simbolo);             // Symbol(mi simbolo)
console.log(bigIntin);            // 65165165111651651651651616515564848949498498489498498498n

// Comprobar tipos de datos
console.log(typeof name);         // string
console.log(typeof number);       // number
console.log(typeof nullValue);    // object (comportamiento histórico)
console.log(typeof isGay);        // boolean
console.log(typeof aaaaa);        // undefined
console.log(typeof simbolo);      // symbol
console.log(typeof bigIntin);     // bigint */


/* //CAMBIO DE VALORES DE LAS VARIABLES
// Declaración de variables con nuevos valores
let name = "Jose";               // Tipo String (modificado de "Manuel" a "Jose")
let number = 50;                  // Tipo Number (modificado de 20 a 50)
let nullValue = null;             // Tipo Null (sin cambios, pero podrías asignar 'null' nuevamente)
let isGay = true;                 // Tipo Boolean (modificado de false a true)
let aaaaa;                   // Tipo Undefined
let simbolo = Symbol("nuevo simbolo");  // Tipo Symbol (modificado el valor del simbolo)
let bigIntin = BigInt(1234567890123456789012345678901234567890); // Tipo BigInt (modificado el valor de BigInt)

// Imprimir valores
console.log(name);                // Jose
console.log(number);              // 50
console.log(nullValue);           // null
console.log(isGay);               // true
console.log(aaaaa);               // Undefined
console.log(simbolo);             // Symbol(nuevo simbolo)
console.log(bigIntin);            // 1234567890123456789012345678901234567890n

// Comprobar tipos de datos
console.log(typeof name);         // string
console.log(typeof number);       // number
console.log(typeof nullValue);    // object
console.log(typeof isGay);        // boolean
console.log(typeof aaaaa);        // Undefined
console.log(typeof simbolo);      // symbol
console.log(typeof bigIntin);     // bigint */


/* // Declaración de variables con nuevos valores de distinto tipo
let name = 7;               // Antes era un string, ahora es un number
let number = "50";          // Antes era un number, ahora es un string
let nullValue = true;       // Antes era null, ahora es un boolean
let isGay = 1;              // Antes era un boolean, ahora es un number (usamos 1 para representar true)
let aaaaa = null;           // Antes era undefined, ahora es null
let simbolo = 12345;        // Antes era un Symbol, ahora es un number
let bigIntin = "bigInt";    // Antes era un BigInt, ahora es un string

// Imprimir valores
console.log(name);                // 7
console.log(number);              // "50"
console.log(nullValue);           // true
console.log(isGay);               // 1
console.log(aaaaa);               // null
console.log(simbolo);             // 12345
console.log(bigIntin);            // "bigInt"

// Comprobar tipos de datos
console.log(typeof name);         // number
console.log(typeof number);       // string
console.log(typeof nullValue);    // boolean
console.log(typeof isGay);        // number
console.log(typeof aaaaa);        // object (null es tratado como un objeto)
console.log(typeof simbolo);      // number
console.log(typeof bigIntin);     // string
 */

// Declaración de constantes con los valores de los primeros ejercicios
const name = "Manuel";              // Tipo String
const number = 20;                  // Tipo Number
const nullValue = null;             // Tipo Null
const isGay = false;                // Tipo Boolean
const aaaaa = undefined;                        // Tipo Undefined (sin valor asignado, es 'undefined' por defecto) produce un error al dejar la constante aaaaa no definida debido a el funcionamiento de la variable const
const simbolo = Symbol("mi simbolo");  // Tipo Symbol
const bigIntin = BigInt(65165165111651651651651616515564848949498498489498498498); // Tipo BigInt

// Imprimir valores
console.log(name);                // "Manuel"
console.log(number);              // 20
console.log(nullValue);           // null
console.log(isGay);               // false
console.log(aaaaa);               // undefined
console.log(simbolo);             // Symbol(mi simbolo)
console.log(bigIntin);            // 65165165111651651651651616515564848949498498489498498498n

// Comprobar tipos de datos
console.log(typeof name);         // string
console.log(typeof number);       // number
console.log(typeof nullValue);    // object
console.log(typeof isGay);        // boolean
console.log(typeof aaaaa);        // undefined
console.log(typeof simbolo);      // symbol
console.log(typeof bigIntin);     // bigint

