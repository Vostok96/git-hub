/**********************************/
/* TIPOS DE DATOS ==> Ejercicios */
/*********************************/
// 1. ¿Cuál es el resultado de la siguiente expresión?
// [1, 2, 3][0] = 1, muestra la posicion del elemento en posicion 0


// 2. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array[0] = 1, muestra la posicion 0

// 3. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array[2] = 4
// array = [1, 2, 4] porque se esta remplaznado(reasigno) el elemnto en la posicion 2 

// 4. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array.length = longitud de 3 elementos

// 5. ¿Cuál es el resultado de la siguiente expresión?
// var array = [1, 2, 3]
// array[array.length - 1] = 3 porque accede al elemento el posicion 2 (length es 3 menos 1 = 2)

// 6. ¿Cuál es el resultado de la siguiente expresión?
// var index = 2
// var array = [1, 2, 3]
// array[index] = 3, porque index vale 2 por lo tanto pide acceder al elemento en posicion 2 que seria el 3
 
// 7. Define un objeto con 3 propiedades: nombre, apellido y edad y muestra el nombre y la edad.
const persona = {
  nombre: 'Denis',
  apellido: 'Gallardo',
  edad: 27,
}
console.log(`Hola soy ${persona.nombre} y tengo ${persona.edad} anos`)

//console.log(objeto.nombre)
//console.log(objeto.edad)

// 8. Agrega una nueva propiedad al objeto anterior llamada correo y muestra el valor de la propiedad.
persona.correo = 'denis@correo.com'

console.log(persona)


// 9. Agrega un nuevo método al objeto anterior llamado nombreCompleto que retorne el nombre y el apellido y muestra el valor de la propiedad. Puedes usar las backticks para concatenar las cadenas.
//persona.nombreCompleto = `${persona.nombre}  ${persona.apellido}`

persona.nombreCompleto = function () {
  return `${'nombre:'} ${this.nombre} ${'apellido:'} ${this.apellido}`
}


console.log(persona.nombreCompleto())

// 10. Accede a las propiedades primer elemento y segundo elemento del siguiente objeto:
var obj = {
  "primer elemento": 1,
  "segundo elemento": 2,
  prop: true,
};

console.log(obj["primer elemento"])
console.log(obj["segundo elemento"])


// 11. Comprueba si el objeto anterior tiene la propiedad prop.
console.log('prop' in obj)


// 12. ¿Cuál es el resultado de la siguiente expresión?
// var obj = {}
// var obj2 = obj

// obj == obj2
// Resultado: true ambos se refieren al mismo objeto en blanco
