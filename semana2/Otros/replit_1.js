

//Encuentre la ultima palabra de un string
let string = 'Hola, me llamo Erik'

function findLastWord(text) {
    // escribe tu solución aquí
    let lastSpace = text.split(' ')
    let ultimateWord = lastSpace[lastSpace.length - 1]
    return ultimateWord
  }

  console.log(findLastWord(string))

  function findLastWord(text) {
    // dividir la cadena en un array de palabras
    const words = text.split(' ');
    // obtener el último elemento del array
    const lastWord = words[words.length - 1];
    // retornar la última palabra
    return lastWord;
  }
  
  const text = 'Hola, me llamo Erik';
  const lastWord = findLastWord(text);
  console.log(lastWord); // imprime 'Erik'


  //Encuentra la segunda palabra de un string 
  function findSecondWord(text) {
    // escribe tu solución aquí
    let spacesText = text.split(' ')
    return spacesText[1]
  }
  console.log(findSecondWord(string))

 // Suma los elementos de un arreglo
 function sumValues(array) {
  // escribe tu solución aquí
  return array[0] + array[1] + array[2]
}

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

//Obtén los correos de todos los usuarios
function getEmails(users) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable emails
  // return emails;
  let emails = users.map(obj => obj.email)
  return emails
}
