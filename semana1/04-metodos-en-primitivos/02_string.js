/*******************************************/
/* MÉTODOS ==> CADENAS DE TEXTO (STRINGS) */
/******************************************/

// Los métodos de strings son métodos que se pueden usar con cadenas de texto

const cadenaDeTexto = 'Hola soy una cadena de texto'

console.log(cadenaDeTexto.length) 
console.log(cadenaDeTexto[cadenaDeTexto.length - 1])

console.log(cadenaDeTexto[0])

// charAt(índice) Devuelve el caráctr en la pisición especificada, si no existe devuelve una cadena vacia.
console.log(cadenaDeTexto.charAt()) // si no se le asigna valor, lo toma como 0 = H
console.log(cadenaDeTexto.charAt(1))
console.log(cadenaDeTexto.charAt(28)) // '' No da undefined, da un string vacio
console.log(cadenaDeTexto.charAt(-1)) // '' No da undefined, da un string vacio
console.log(cadenaDeTexto.charAt(4)) // ''
console.log(cadenaDeTexto.charAt(8)) // ''

// at(indíce) - Devuelve el carácter en la posición especificada, si no existe devuelve undefined. Este método permite enteros positivos y negativos. Los enteros negativos cuentan de nuevo desde el último carácter de cadena.
console.log(cadenaDeTexto.at()) // H si no se le asigna valor, lo toma como 0
console.log(cadenaDeTexto.at(-1)) // o 
console.log(cadenaDeTexto.at(-2)) // t   la ventaja es que sí podemos utilizar negativos
console.log(cadenaDeTexto.at(28)) // undefined Desventaja, cuando un índice no existe, también regresa undefined

// indexOf(valor, indíce) - Devuelve la posición del primer carácter de la cadena especificada, si no existe devuelve -1.
console.log(cadenaDeTexto.indexOf()) // Si no le paso valor, devuelve -1
console.log(cadenaDeTexto.indexOf('c'))
console.log(cadenaDeTexto.indexOf('d'))
console.log(cadenaDeTexto.indexOf('d', 16))
console.log(cadenaDeTexto.indexOf('d', cadenaDeTexto.indexOf('d') + 1)) // Esto podríamos hacer si no sabemos cuál es el índice de d
console.log(cadenaDeTexto.indexOf(' '))
console.log(cadenaDeTexto.indexOf('z')) // Si no existe arroja -1

// lastIndexOf(valor, indíce) - Devuelve la posición del último carácter de la cadena especificada, si no existe devuelve -1.
//Si se coloca sólo el valor te va a atraer la primer coincidencia iterando de derecha a izquierda
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.lastIndexOf())
console.log(cadenaDeTexto.lastIndexOf('d'))
console.log(cadenaDeTexto.lastIndexOf('d', 19))
console.log(cadenaDeTexto.lastIndexOf(' '))
console.log(cadenaDeTexto.lastIndexOf('z'))

// includes(valor, indíce) - Devuelve true si la cadena especificada está contenida en la cadena, o false si no está. Es para comprobar.
//Si se coloca sólo el valor te va a atraer la primer coincidencia de izquierda a derecha
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.includes()) // Si no le paso valor, devuelve false
console.log(cadenaDeTexto.includes('Hola')) 
console.log(cadenaDeTexto.includes('d', 20)) 
console.log(cadenaDeTexto.includes('d', 22)) 
console.log(cadenaDeTexto.includes('hola')) 

// startsWith(valor, indíce) - Devuelve true si la cadena especificada está al inicio de la cadena, o false si no está.
//Si se coloca sólo el valor te va a atraer la primer coincidencia de izquierda a derecha
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.startsWith('Hola'))
console.log(cadenaDeTexto.startsWith('hola')) // El valor lo busca exacto, es decir, la coincidencia debe ser exacta
console.log(cadenaDeTexto.startsWith('soy'))
console.log(cadenaDeTexto.startsWith('soy', 5))

// endsWith(valor, indíce) - Devuelve true si la cadena especificada está al final de la cadena, o false si no está.
//Si se coloca sólo el valor te va a atraer la primer coincidencia de derecha a izquierda
//Si se coloca valor e índice, te traerá la primer coincidencia a partir del índice que le indiques
console.log(cadenaDeTexto.endsWith('texto'))
console.log(cadenaDeTexto.endsWith('de'))
console.log(cadenaDeTexto.endsWith('de', 22))

/* Mayúsculas y minúsculas */
// toUpperCase() - Devuelve la cadena en mayúsculas.
console.log(cadenaDeTexto.toUpperCase())

// toLowerCase() - Devuelve la cadena en minúsculas.
console.log(cadenaDeTexto.toLowerCase())

/* Extraer un trozo de una cadena */

// substring(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena.
console.log(cadenaDeTexto.substring())
console.log(cadenaDeTexto.substring(0, 4))
console.log(cadenaDeTexto.substring(4, 0))
console.log(cadenaDeTexto.substring(-4))
console.log(cadenaDeTexto.substring(28)) // ''

// slice(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena. // A diferencia de substring sí permite números negativos
console.log(cadenaDeTexto.slice())
console.log(cadenaDeTexto.slice(0, 3))
console.log(cadenaDeTexto.slice(0, 4))
console.log(cadenaDeTexto.slice(5, 5))
console.log(cadenaDeTexto.slice(-5))
console.log(cadenaDeTexto.slice(0, 4))
console.log(cadenaDeTexto.slice(4, 0)) // ''

// División de cadenas
// split(separador, limite) - Devuelve un array con las partes de la cadena que se separan por el separador especificado.
console.log(cadenaDeTexto.split(' '))
console.log('este-es-un-titulo'.split('-'))
console.log('27/06/2023'.split('/'))

console.log(cadenaDeTexto.split(' ', 2))
console.log(cadenaDeTexto.split(' ', -2)) // => No reconoce nñumeros negativos

console.log(cadenaDeTexto.split(' ').at()) // Hola
console.log(cadenaDeTexto.split(' ').at(-1)) // texto

// Recorte de espacios en blanco
// trim() - Devuelve una cadena con los espacios en blanco eliminados de la izquierda y derecha. Es decir, el del principio y el del final.
console.log('/*', '   Hola     ', '*/') // /*      Hola      */
console.log('/*', '   Hola     ', '*/'.trim()) // /*Hola*/

// Búsqueda y sustitución de valores de cadenas
// replace(valor, nuevoValor) - Devuelve una nueva cadena con una o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por el nuevo valor.
// replace sólo reemplaza la primera coincidencia que encuentre.
console.log(cadenaDeTexto.replace('Hola', 'Adios'))
console.log(cadenaDeTexto.replace('Hola', 'Adios').replace('soy', 'eres'))

//La ventaja de replace es que se pueden pasar expresiones regulares:
// g - Reemplaza todas las apariciones del valor especificado.
// i - Ignora mayúsculas y minúsculas.
// m - Multi-linea.

console.log('El Perro grande, ladro al perro chico junto al otro perro'.replace(/perro/gi, 'gato').replace('ladro', 'mordio'))

// Repetición
// repeat(n) - Devuelve una cadena repetida n veces.
console.log('Hola '.repeat(3)) // Hola Hola Hola

//padStart(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo izquierdo de la string
const h = '5'
const m = '6'
const s = '2'

console.log(`${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`) // 05:06:02

// El método toString() devuelve una cadena (Todos los objetos tienen un método toString). 
const num = 10
console.log(typeof num.toString())
const boolean = true
console.log(typeof boolean.toString())

// padEnd(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo dercho de la string.
console.log(''.padEnd(10, '*'))
console.log('contraseña'.padEnd(10, '*'))
