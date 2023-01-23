// 1. Crea un arreglo con los números del 1 al 400
let arr = []
for (i = 1; i <= 400; i++){
   arr[i - 1] = i
}
console.log(arr)

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.

function arrd(n1, n2) {
    let arr2 = []
    for(i = n1; i <= n2; i++) {
    arr2.push(i)
    }
    return arr2
}
console.log(arrd(1, 4))
// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sum(arr) {
   let tot = 0
    for (i = 0; i < arr.length; i++) {
        tot += arr[i]
    }
return tot
}
console.log(sum(numeros))

// 4. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con los correos de los usuarios.
const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }
]
function us(ustedes){
    let emails = [];
    for (i = 0; i < ustedes.length; i++) {
       emails[i] = ustedes[i].correo
    }
return emails
}
console.log(us(usuarios))

// 5. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todas las urls de las cuentas de facebook.

function urls (usdr) {
    let url = []
    for (i = 0; i < usdr.length; i++) {
        url[i] = usdr[i].social[0].url
    }
return url
}
console.log(urls(usuarios))

// 6. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.
function filterWomens (arr){
  let woms = []
  for (i = 0; i < arr.length; i++){
    if(arr[i].genero === 'Mujer'){
      woms.push(arr[i].nombre)
    }
  }
return woms
}

console.log(filterWomens(usuarios))
// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.
// function getYoungAdults(users){
//   let youngAdults=[]
//   users.forEach(user => {
//     if(20 <= user.edad && user.edad <=30){
//       youngAdults.push(user)
//     }
//   })
//   return youngAdults
// }
// console.log(getYoungAdults(usuarios))
function agemid (arr2){
  let young = []
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i].edad >= 20 && arr2[i].edad <= 30) {
      young.push(arr2[i])
    }
  }
  return young
}
console.log(agemid(usuarios))
// 8. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
const ns = [1, 2, 3, 4, 5, 5, 6, 5]

function mid (arr3){
  let mid = []
  let posMid = Math.floor(arr3.length/2)
  if (arr3.length % 2 === 0){
    mid.push(arr3[posMid - 1])
    mid.push(arr3[posMid])
  } else {
    mid.push(arr3[posMid])
  }
return mid
}
console.log(mid(ns))

// 9. El reto Fizz Buzz: Tenemos un array de números del 1-100, todos los que son múltiplos de 3 deben devolver Fizz, todos los que son múltiplos de 5 deben devolver Buzz y los que son múltiplos de ambos, es decir, 3 y 5, deben devolver Fizz Buzz.
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

function fizzbuzz(arr4){
  let theFizzBuzz = []
  for (i = 0; i < arr4.length; i++){
    if (arr4[i] % 15 === 0){
      theFizzBuzz.push(`${i + 1} Fizz Buzz`)
    } else if (arr4[i] % 5 === 0){
      theFizzBuzz.push(`${i + 1} Buzz`)
    } else if (arr4[i] % 3 === 0 ){
      theFizzBuzz.push(`${i + 1} Fizz`)
    }
  }
  return theFizzBuzz
}
console.log(fizzbuzz(num))
