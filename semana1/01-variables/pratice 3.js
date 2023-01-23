// Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".
function hey(name, age){
    return `Hola, mi nombre es ${name} y tengo ${age} años`
}

console.log(hey('Denis', 27))

//1 - Declara una variable global llamada saludo y colócale como valor "Hola los saludo desde:"
//2 - Declara una función sin parámetros, dentro crea una variable local llamada pais y colócala como valor el país de donde vienes.
//3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
let saludo = "Hola los saludo desde:"
function sayHey(){
    let pais = 'Peru'
    return `${saludo} ${pais}`
}

console.log(sayHey())

// Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
function suma(n1, n2){
    return n1 + n2
}

console.log(suma(2,5))

// Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.
function doble(result){
    return result*2
}
console.log(doble(suma(2,5)))

// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".
function welcome(name = 'Anónimo'){
    return `Bienvenido ${name}`
}
console.log(welcome())

// Completa la función para que agregue más elementos al final del array
const array = ["a", "b", "c"];

function addElem(arr,n){
    arr[arr.length] = n
    return arr
}

console.log(addElem(array, 'd'))
console.log(addElem(array, 'e'))

// Define una función que compruebe si existe una propiedad en un objeto, si es así, debe retornar true y si no, false
//Define una función que reciba como parámetro un objeto con las propiedades nombre, edad y país y un string con el nombre de la propiedad país. La función deberá retornar el valor de la propiedad país.
let obj = {
    nombre: 'Denis',
    edad: 27,
    pais: 'Peru'
}

function hasPropperty(objec, prop){
    return prop in objec
}
console.log(hasPropperty(obj, 'edad'))

//Define una función que reciba como parámetro un arreglo de 3 números, deberás retornar la suma de todos los números
let nums = [1, 2, 3]
function sum(num){
    return num[0] + num[1] + num[2]
}
console.log(sum(nums))
