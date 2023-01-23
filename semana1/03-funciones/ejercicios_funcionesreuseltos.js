/******************************/
/* Ejercicios con funciones: */
/*****************************/
// Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".
function usuario(name, age) {
  console.log(`Hola, mi nombre es ${name} y tengo ${age} años`)
}
usuario('Victor', 37)

/*
  1 - Declara una variable global llamada saludo y colócale como valor "Hola los saludo desde:"
  2 - Declara una función sin parámetros, dentro crea una variable local llamada pais y colócala como valor el país de donde vienes.
  3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
*/
let saludo = 'Hola los saludo desde:'

function saludoDesde(){
  let pais = 'Colombia'
  return `${saludo} ${pais}`
}

console.log(saludoDesde())

// Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
function suma( num1, num2 ) {
  return num1 + num2
}

console.log(suma(8, 6)) 
// Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.

let resultado = suma(8, 6)

function doblar(resultado){
  return resultado * 2
}

doblar(resultado)


// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".
function hello(name = 'Anónimo') {
  return `Bienvenido ${name}`
}

console.log(hello())

// Completa la función para que agregue más elementos al final del array
const array = ["a", "b", "c"];

function addElementos(arr, n){
  arr[arr.length] = n
  return arr    
}
console.log(addElementos(array,'d'))

// Define una función que compruebe si existe una propiedad en un objeto, si es así, debe retornar true y si no, false
let obj = {
  nombre: 'Denis',
  edad: 27,
  pais: 'Peru'
}
//function hasProperty (object,prop){
  //return prop in object


//console.log(hasProperty(obj, 'edad'))

function returned (obj2,prop){
  return obj2[prop]
}

console.log(returned(obj, 'pais'))

// Define una función que reciba como parámetro un objeto con las propiedades nombre, edad y país y un string con el nombre de la propiedad país. La función deberá retornar el valor de la propiedad país.

// Define una función que reciba como parámetro un arreglo de 3 números, deberás retornar la suma de todos los númros
let num = [1, 2, 3]
function sumanum(arre){
    return arre[0] + arre[1] + arre[2]
}
console.log(sumanum(num))
// Resuelve el siguiente problema utilizando funciones:
//Tenemos un arreglo de usuarios, cada usuario tiene varios atributos; nombre, dad, país, etc. Queremos obtener un arreglo con los nombres de todos los usuarios.
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    correo: "erik@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/erik" },
      { nombre: "twitter", url: "twitter/erik" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: "georg@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/georg" },
      { nombre: "twitter", url: "twitter/georg" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: "andrea@hotmail.com",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: "oscar@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/oscar" },
      { nombre: "twitter", url: "twiter/oscar" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: "andrea@uaq.mx",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
];

function letNames(user){
  return [
  user[0].nombre,
  user[1].nombre,
  user[2].nombre,
  user[3].nombre,
  user[3].nombre
  ]
}

console.log(letNames(usuarios))

// Resuelve el siguiente problema utilizando funciones:
//Tenemos un arreglo de usuarios, cada usuario tiene varios atributos; nombre, dad, país, etc. Queremos obtener un arreglo con las url de facebook de todos los usuarios (UTILIZA EL ARREGLO ANTERIOR).

function letUrl(user){
  return[
      user[0].social[0].url
  ]
}

console.log(letUrl(usuarios))
