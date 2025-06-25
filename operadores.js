/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 10
let b = 5

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let exponente = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += a
resta -= b
multiplicacion *= 2
division /= 2
modulo %= 2
exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a > b)
console.log(b < a)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a < b)
console.log(b > a)

// 5. Utiliza el operador lógico and

console.log(a > b && b < a)

// 6. Utiliza el operador lógico or

console.log(a > b || b > a)

// 7. Combina ambos operadores lógicos

console.log(a > b && b > 1 || b < a && b < 1)

// 8. Añade alguna negación

console.log(a !== b)

// 9. Utiliza el operador ternario

let ternaria = a > b ? "a mayor que b" : (a == b ? "a igual que b" : "b mayor que a")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(a + b > 12 && a - b < 3)