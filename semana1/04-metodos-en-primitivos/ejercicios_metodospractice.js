// => Ejericios de métodos en primitivos
// 1. Escribe una función que reciba un string y retorne la primera palabra de la cadena.
const text = "Hola mundo"

const lastWord = (string) => {
  return string.split(' ')[0]

}
console.log(lastWord(text))
// 2. Escribe una función que reciba un string y retorne la última palabra de la cadena.
const last = (string) => {
  const ult = string.split(' ')
  return string[string.length - 1]
}

const lW = (string) => {
  const lww = string.lastIndexOf(' ')
  const ends = string.slice(lww)
  return ends
}
console.log(lW(text))
// 3. Escribe una función que reciba un string y retorne la cantidad de palabras que contiene.
const total = (string) => {
  return string.split(' ').length

}
console.log(total(text))

// 4. Escribe una función que compruebe si el correo electrónico que recibe como parámetro termina en @academlo.com
const email = "juan@academlo.com"
const check = (string) => {
  return string.endsWith('@academlo.com')
}
console.log(check(email))
// 5. Escribe una función que reciba como parámetro una frase y una palabra y deberas reemplazar la última palabra de la frase.
const phrase = "Estoy aprendiendo JavaScript en Línea"
const word = "Academlo"

const swap = (phrase, word) => {
  const wordchange = phrase.split(' ').at(-1)
  return phrase.replace(wordchange, word)
}
console.log(swap(phrase, word))
// 6. Escribe una función que reciba como parámetro una frase y deberás retornar la longitud de la última palabra.
const phrase2 = "Estoy aprendiendo JavaScript en Academlo"
function long (string) {
  return string.split(' ')[string.split(' ').length - 1].length
}
console.log(long(phrase2))
// 7. Declara una función que reciba como parámetro 3 cadenas de texto, deberas extraer las edades de cada una de ellas y retornar la suma de esas edades.
// La edad siempre será la penúltima palabra de la cadena.
const cadena = 'Hola, mi nombre es Erik y tengo 30 años'
const cadena2 = 'Hola, mi nombre es Brayan y tengo 25 años'
const cadena3 = 'Hola, mi nombre es Andres y tengo 40 años'
function sum (s1, s2, s3) {
  return parseInt(s1.split(' ').at(-2)) + parseInt(s2.split(' ').at(-2)) + parseInt(s3.split(' ').at(-2))
}
console.log(sum(cadena, cadena2, cadena3))
// 8. Define una función que regrese un número aleatorio entre 1 y 10.
function aleat(){
  return Math.floor(Math.random()*10) + 1
}                         
console.log(aleat())
// 9. Cuál es el resultado de las siguientes operaciones:
Math.floor(10.5) // Respuesta aquí:10 
Math.ceil(10.5) // Respuesta aquí:11 
Math.round(10.5) // Respuesta aquí:11 

// 10. Resuelve el siguiente problema: el formato de la hora en un reloj digital tiene este formato 00:00:00, es decir, las horas, minutos y segundos están representados por dos dígitos. ¿Cómo podríamos resolver este problema?
const hours = 4
const minutes = 7
const seconds = 9

const resul = `${(hours.toString().padStart(2, 0))}:${(minutes.toString()).padStart(2, 0)}:${(seconds.toString()).padStart(2, 0)}`
console.log(resul)