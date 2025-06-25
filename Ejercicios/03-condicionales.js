/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = `Mario`

if (nombre === `Mario`) {
    console.log(`Mi nombre es ${nombre}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuarioCorrecto = "user"
let contraseñaCorrecta = "pass"

let usuario = "otro"
let contraseña = "otra"

if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
    console.log("Accediste correctamente!!")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 12

if (num > 0) {
    console.log("El numero es positivo.")
} else if (num < 0) {
    console.log("El numero es negativo.")
} else {
    console.log("El numero es 0.")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17

if (edad >= 18) {
    console.log("Es mayor de edad.")
} else {
    console.log(`No es mayor de edad y le faltan ${18 - edad} para serlo.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let estadoEdad = edad >= 18 ? "Adulto" : "Menor"

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 9
if (mes <= 0 || mes > 12) {
    console.log(`El mes no puede ser menor de 1 o mayor de 12.`)
}else {
    if (mes < 2 || mes >= 11) {
        console.log("Invierno")
    } else if (mes >= 2 && mes < 6) {
        console.log("Primavera")
    } else if (mes >= 6 && mes < 9) {
        console.log("Verano")
    } else {
        console.log("Otoño")
    }
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 2) {
    console.log(28)
} else if (mes % 2 == 0) {
    console.log(31)
} else {
    console.log(30)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let lang = "es"

switch (lang) {
    case "es":
        console.log("Hola en Español!!")
        break
    case "en":
        console.log("Hello in English!!")
        break
    default:
        console.log("Not a correct language")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 1:
        console.log("Invierno")
        break
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break
    case 12:
        console.log("Invierno")
        break
    default:
        console.log("Valor incorrecto")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 1:
        console.log(30)
    case 2:
        console.log(28)
        break
    case 3:
        console.log(31)
        break
    case 4:
        console.log(30)
        break
    case 5:
        console.log(31)
        break
    case 6:
        console.log(30)
        break
    case 7:
    case 8:
        console.log(31)
        break
    case 9:
        console.log(30)
        break
    case 10:
        console.log(31)
        break
    case 11:
        console.log(30)
        break
    case 12:
        console.log(31)
        break
    default:
        console.log("Mes invalido")
}