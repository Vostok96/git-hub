// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuanto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.

// tu código aquí

let pizzaType = 'personal'
let pizzaPrice 

if (pizzaType === "pequeña") {
  pizzaPrice = 10;
} else if (pizzaType === "mediana") {
  pizzaPrice = 15;
} else if (pizzaType === "grande") {
  pizzaPrice = 20;
} else if (pizzaType === "familiar") {
  pizzaPrice = 25;
} else {
  console.log("Esta pizza no está disponible");
}

if (pizzaPrice) {
  console.log("El precio de su pizza es de $" + pizzaPrice);
}

// 2. Pasa la siguiente condición a una sentencia switch
const diaDeLaSemana = 'martes'
if (diaDeLaSemana === 'lunes') {
  console.log('Es lunes')
} else if (diaDeLaSemana === 'martes') {
  console.log('Es martes')
} else if (diaDeLaSemana === 'miercoles') {
  console.log('Es miercoles')
} else if (diaDeLaSemana === 'jueves') {
  console.log('Es jueves')
} else if (diaDeLaSemana === 'viernes') {
  console.log('Es viernes')
} else if (diaDeLaSemana === 'sabado') {
  console.log('Es sabado')
} else if (diaDeLaSemana === 'domingo') {
  console.log('Es domingo')
} else {
  console.log('No es un día de la semana')
}

switch (diaDeLaSemana) {
  case "lunes":
    console.log("Es lunes");
    break;
  case "martes":
    console.log("Es martes");
    break;
  case "miercoles":
    console.log("Es miercoles");
    break;
  case "jueves":
    console.log("Es jueves");
    break;
  case "viernes":
    console.log("Es viernes");
    break;
  case "sabado":
    console.log("Es sabado");
    break;
  case "domingo":
    console.log("Es domingo");
    break;
  default:
    console.log("No es un día de la semana");
    break;
}





// 3. La siguiente función debe recibir como parámetro un string con un nombre del mes y debe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido". Use la sentencia switch.


function estacion(mes) {
  // tu código aquí
  switch (mes) {
    case "enero":
      console.log("Verano");
      break;
    case "febrero":
      console.log("Verano");
      break;
    case "marzo":
      console.log("Verano");
      break;
    case "abril":
      console.log("Otoño");
      break;
    case "mayo":
      console.log("Otoño");
      break;
    case "junio":
      console.log("Otoño");
      break;
    case "julio":
      console.log("Invierno");
      break;
    case "agosto":
      console.log("Invierno");
      break;
    case "setiembre":
      console.log("Invierno");
      break;
    case "octubre":
      console.log("Invierno");
      break;
    case "noviembre":
      console.log("Invierno");
      break;
    case "diciembre":
      console.log("Verano");
      break;
    default:
      console.log("Mes no válido");
      break;
  }
}
estacion('casita')


// 4. Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.
function ret(n){
  if (n > 10){
    return n
  } else return n*2
}

console.log(ret(11))


// 5. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function halfArray(params) {
  // tu código aquí
}

console.log(halfArray([1, 3, 4]))
console.log(halfArray([1, 3, 4, 5, 6, 7]))
// 6. Tenemos un array con varios colores repetidos, pero quisieramos saber cuantos colores diferentes hay en el array y que cantidad de cada color hay. Tu trabajo es crear una función que reciba un array de colores y retorne un objeto con la cantidad de cada color.
const colores = [
  "rojo",
  "verde",
  "verde",
  "azul",
  "amarillo",
  "naranja",
  "rojo",
  "amarillo",
  "rojo",
  "verde",
  "azul",
  "rojo",
]
