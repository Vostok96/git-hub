// 1. Realiza una función que reciba un número y devuelva true si es par o false si es impar.
const isEven  = (n) =>{
  return n%2 === 0
}
console.log(isEven(2))
  // 2. Realiza una función que reciba un número y devuelva true si es múltiplo de 5 o false si no lo es.
 const evenFive = (n2) =>{
 return n2%5 === 0
 }
console.log(evenFive(15))
  
  // 3. Realiza una función que reciba un número y devuelva el doble de ese número.
const doble = (n3) => {
  return n3*2
}
console.log(doble(3))

  // 4. ¿Cuál es el resultado de las siguientes operaciones?
  // console.log(2 + 2 * 2) => 6
  // console.log(10 + 4 - 2 * 5) => 4
  // console.log(11 % 4) => 3
  // console.log(10 ** 2) => 100
  
  // 5. ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
  let a = 1
  let b = 1
  
  const c = ++a 
  const d = b++
  
  console.log(a) // => 1
  console.log(b) // => 2
  console.log(c) // => 2
  console.log(d) // => 1
  
  // 6. ¿Cuáles son los valores de ‘e’ y ‘f’ después del código a continuación?
  let e = 2
  const f = 1 + (e *= 2)
  //console.log(e) // 4
  //console.log(f) // 5
  
  // 7. ¿Cuál es el valor de ‘g’ después del código a continuación?
  let g = 3
  g += 5
  //console.log(g) // 8