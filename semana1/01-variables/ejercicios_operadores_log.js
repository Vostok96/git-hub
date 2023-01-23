// 1. ¿Cuál es el resultado de la siguiente expresión?
console.log(null || 2 || undefined) //
console.log(1 || 2 || 3) //
console.log(1 && null && 2) //
console.log(1 && 2) //
console.log(null || 2 && 3 || 4) //

const count = 0

console.log(null || count || 35) //
console.log(null && count && 35) //
console.log(null ?? count ?? 35) //

// 2. Usando los operadores lógicos, escriba una expresión que devuelva true si el usuario está autenticado y si tiene acceso a la página
const user = { authenticated: true, access: true }
const user2 = { authenticated: true, access: false }
const user3 = { authenticated: false, access: true }
const use4 = { authenticated: false, access: false }

console.log(user.authenticated && user.access) //
console.log(user2.authenticated && user2.access) //
console.log(user3.authenticated && user3.access) //
console.log(use4.authenticated && use4.access) //

console.log(user.authenticated || user.access) //
console.log(user2.authenticated || user2.access) //
console.log(user3.authenticated || user3.access) //
console.log(use4.authenticated || use4.access) //

// 3. Resuelva el siguiente problema: Tenemos un arreglo de frutas, y queremos todas las frutas que empiecen con la letra "P" y que aparte sean de la tienda "La frutera".
const fruits = [{ nombre: 'Uva', tienda: 'El mercado' }, { nombre: 'Pera', tienda: 'La frutera' }, { nombre: 'Manzana', tienda: 'La frutera' }, { nombre: 'Papaya', tienda: 'El mercado' }, { nombre: 'Platano', tienda: 'La frutera' }, { nombre: 'Piña', tienda: 'La frutera' }]
const tienda = 'La frutera'
