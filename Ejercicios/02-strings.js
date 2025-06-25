/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let miString1 = "Hola, "
let miString2 = "Mario!"

let miStringConcatenada = "Saludo: " + miString1 + miString2

// 2. Muestra la longitud de una cadena de texto

console.log(`La longitud es: ${miStringConcatenada.length}`)

// 3. Muestra el primer y último carácter de un string

console.log(`Primer Caracter: ${miString2.charAt(0)}, Ultimo Caracter: ${miString2.charAt(miString2.length-1)}`)

// 4. Convierte a mayúsculas y minúsculas un string

console.log(miString1.toUpperCase())
console.log(miString2.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias líneas

console.log(`Un string
con varias
lineas directamente`)
console.log("Y este\ntambien tiene\nvarias lineas")

// 6. Interpola el valor de una variable en un string

console.log(`Variable interpolada: ${miStringConcatenada}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let miStringReemplazada = miStringConcatenada.replaceAll(" ", "_")
console.log(miStringReemplazada)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(miStringConcatenada.includes("Saludo"))

// 9. Comprueba si dos strings son iguales

console.log(miString1 === miString2)
console.log(miString1 == miString2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(miString1.length == miString2.length)
console.log(miString1.length === miString2.length)