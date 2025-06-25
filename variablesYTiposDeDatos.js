/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario de una línea.

// 2. Escribe un comentario en varias líneas

/*
Esto es un comentario
de
multiples
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let miString = "Mario es un string"
let miNumber = 20
let miDecimalNumber = 20.5
let miBooleana = true
let indefinido
let valorNulo = null
let miSymbol = Symbol("tagdemisymbolunico")
let miBigInt = BigInt(123345123345567567567567423423423425464564563453234)

// 4. Imprime por consola el valor de todas las variables

console.log("Valor miString: "+miString)
console.log("Valor miNumber: "+miNumber)
console.log("Valor miDecimalNumber: "+miDecimalNumber)
console.log("Valor miBooleana: "+miBooleana)
console.log("Valor indefinido: "+indefinido)
console.log("Valor valorNulo: "+valorNulo)
console.log("Valor miSymbol: ",miSymbol)
console.log("Valor miBigInt: "+miBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log("Tipo de miString: "+typeof miString)
console.log("Tipo de miNumber: "+typeof miNumber)
console.log("Tipo de miDecimalNumber: "+typeof miDecimalNumber)
console.log("Tipo de miBooleana: "+typeof miBooleana)
console.log("Tipo de indefinido: "+typeof indefinido)
console.log("Tipo de valorNulo: "+typeof valorNulo)
console.log("Tipo de miSymbol: "+typeof miSymbol)
console.log("Tipo de miBigInt: "+typeof miBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

miString = "Nuevo valor String"
miNumber = 25
miDecimalNumber = 25.5
miBooleana = false
miSymbol = Symbol("otrosymbol")
miBigInt = 2902838482388238492398482938849238489238429834829384892398482934n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

miString = 20.5
miNumber = "ahora un string"
miBooleana = Symbol("ahora la booleanaes un symbol")
indefinido =  12
valorNulo =  20.34

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const MI_CONSTANTE = 22
const nombre = "nombrequenocambia"

// 9. A continuación, modifica los valores de las constantes

// nombre = "ahoraotronombrenomedeja"
console.log("Valor de nombre:"+nombre)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse  
//Comentada línea  76