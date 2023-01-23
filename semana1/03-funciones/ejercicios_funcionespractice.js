/******************************/
/* Ejercicios con funciones: */
/*****************************/
// Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".
function hello(name, age){
         return `Hola, mi nombre es ${name} y tengo ${age} años`
}
console.log(hello('Denis', 27))  
  /*
    1 - Declara una variable global llamada saludo y colócale como valor "Hola los saludo desde:"
    2 - Declara una función sin parámetros, dentro crea una variable local llamada pais y colócala como valor el país de donde vienes.
    3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
  */
let hey = "Hola los saludo desde:"
function sayHey () {
         let pais = 'Peru'
         return `${hey} ${pais}`
}
console.log(sayHey())

  // Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
 function suma(n1, n2){
          return n1 + n2
 }
 console.log(suma(1,4))

  // Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.
function doblar(res){
    return res*2
}
  console.log(doblar(suma( 1,4)))
  
  // Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".
 
  function bienvenida(nombre = 'Anonimo'){
    return `Bienvenido ${nombre}`
  }
console.log(bienvenida('Denis'))


  // Completa la función para que agregue más elementos al final del array
  const array = ["a", "b", "c"];
  function add(arr,n) {
    arr[arr.length] = n
    return arr   
  }
  console.log(add(array,'d'))
  // Define una función que compruebe si existe una propiedad en un objeto, si es así, debe retornar true y si no, false
  // Define una función que reciba como parámetro un objeto con las propiedades nombre, edad y país y un string con el nombre de la propiedad país. La función deberá retornar el valor de la propiedad país.
  
  person = {
    name: 'Denis',
    lastname: 'Gallardo',
    country: 'Peru'
  }
  
  function propperty (obj, prop){
    return prop in obj
}
console.log(propperty(person, 'lastname'))

function country(obj){
    return `Hola soy de ${obj.country}`
  }
console.log(country(person))

  // Define una función que reciba como parámetro un arreglo de 3 números, deberás retornar la suma de todos los númros
  function sumado(array){
    return array[0] + array[1] + array[2]
  }

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
  
  function names (ar){
    return [
        ar[0].nombre,
        ar[1].nombre,
        ar[2].nombre,
        ar[3].nombre,
        ar[4].nombre
    ]
  }
  console.log(names(usuarios))
  // Resuelve el siguiente problema utilizando funciones:
  //Tenemos un arreglo de usuarios, cada usuario tiene varios atributos; nombre, dad, país, etc. Queremos obtener un arreglo con las url de facebook de todos los usuarios (UTILIZA EL ARREGLO ANTERIOR).
  
  function url (ar){
    return [
        ar[0].social[0].url,
        ar[1].social[0].url,
        ar[2].social[0].url,
        ar[3].social[0].url,
        ar[4].social[0].url
        ]
    }
console.log(url(usuarios))