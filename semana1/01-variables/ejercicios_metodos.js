// => Ejericios de métodos en primitivos
// 1. Escribe una función que reciba un string y retorne la primera palabra de la cadena.
const text = "Hola mundo"

const firstWord = (text) => {
  // tu código aquí
  // mi solucion let fw = text.split(' ')
  // return fw[1]
  return text.split(' ')[0]

}

console.log(firstWord(text))

// 2. Escribe una función que reciba un string y retorne la última palabra de la cadena.
const lastWord = (text) => {
  // tu código aquí
  // mi solucion let uw = text.split(' ')
  // return uw[uw.length -1]
  const indice = text.lastIndexOf(' ')
  const endsInd = text.slice(indice)
  return endsInd
}


console.log(lastWord(text))

// 3. Escribe una función que reciba un string y retorne la cantidad de palabras que contiene.
const wordsCount = (text) => {
 // mi solucion let cw = text.split(' ')
 //  return cw.length
  // tu código aquí
  return text.split(' ').length
}

console.log(wordsCount(text))

// 4. Escribe una función que compruebe si el correo electrónico que recibe como parámetro es termina en @academlo.com
const email = "juan@academlo.com"

const isAcademloEmail = (email) => {
  // tu código aquí
  return email.endsWith('@academlo.com')
}

console.log(isAcademloEmail(email))

// 5. Escribe una función que reciba como parámetro una frase y una palabra y deberas reemplazar la última palabra de la frase.
const phrase = "Estoy aprendiendo JavaScript en Línea"
const word = "Academlo"

const replaceLastWord = (phrase, word) => {
  // tu código aquí
  const lastWord = phrase.split(' ').at(-1)
  return phrase.replace(lastWord, word)
}

console.log(replaceLastWord(phrase, word))

// 6. Escribe una función que reciba como parámetro una frase y deberas retornar la longitud de la última palabra.
const phrase2 = "Estoy aprendiendo JavaScript en Academlo"

const phraseLength = (phrase) => {
  // tu código aquí
  //return phrase2.split(' ')[phrase2.split(' ').length - 1].length
  return phrase2.split(' ').at(-1).length
}

console.log(phraseLength(phrase2))

// 7. Declara una función que reciba como parámetro 3 cadenas de texto, deberas extraer las edades de cada una de ellas y retornar la suma de esas edades.
// La edad siempre será la penúltima palabra de la cadena.
const cadena = 'Hola, mi nombre es Erik y tengo 30 años'
const cadena2 = 'Hola, mi nombre es Brayan y tengo 25 años'
const cadena3 = 'Hola, mi nombre es Andres y tengo 40 años'

function sumarEdades (cadena, cadena2, cadena3) {
  // Tu código aquí
 return parseInt(cadena.split(' ').at(-2)) + parseInt(cadena2.split(' ').at(-2)) + parseInt(cadena3.split(' ').at(-2))
}


console.log(sumarEdades(cadena, cadena2, cadena3))

// 8. Define una función que regrese un número aleatorio entre 1 y 10.
function random() {
  // tu código aquí
  return Math.floor(Math.random()*10 + 1)
}

console.log(random())

// 9. Cuál es el resultado de las siguientes operaciones:
Math.floor(10.5) // Respuesta aquí:10
Math.ceil(10.5) // Respuesta aquí:11
Math.round(10.5) // Respuesta aquí:11

// 10. Resuelve el siguiente problema: el formato de la hora en un reloj digital tiene este formato 00:00:00, es decir, las horas, minutos y segundos están representados por dos dígitos. ¿Cómo podríamos resolver este problema?
const hours = 4
const minutes = 7
const seconds = 9

const time = ` ${(hours.toString()).padStart(2,0)}:${(minutes.toString()).padStart(2,0)}:${(seconds.toString()).padStart(2,0)}`// tu código aquí
console.log(time)
