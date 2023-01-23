let persons = [
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' },
  { name: 'jose', email: 'jose@academlo.com' },
  
]

let att = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'jose@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
  ]


// function mergeData(users, attendances) {
//     let allData = []
//       for (i = 0; i < users.length; i++) {
//       if (users[i].email === attendances[i].email){
//         allData.push({name: users[i].name, email: users[i].email, attendance: attendances[i].attendance})
//         }
//     }
//       return allData
//}

  //console.log(mergeData(persons, att))


//   function mergeData (users, attendances) {
//     let allData = []
//     for (const ems of users) {
//       for (const ems of attendances) {
//         if (users.email === attendances.email) {
//           allData.push({name: users.name, email: users.email, attendance: attendances.attendance})
// //         
//       }
//     }
//     return resultado;
//   }}

//   console.log(mergeData(persons, att))

// function mergeData(users, attendances) {

//   for (let i = 0; i < users.length; i++) {
//      for (let j = 0; j < attendances.length; j++) {
//        if (users[i].email === attendances[j].email) {
//          users[i].attendance = attendances[j].attendance;
         
//          }
//      }  
//  }
//  return users;
// }

// console.log(mergeData(persons, att))



function mergeData(persons, att) {
  let allData = [];
  for (const person of persons) {
    for (const a of att) {
      if (person.email === a.email) {
        allData.push({ name: person.name, email: person.email, attendance: a.attendance });
      }
    }
  }
  return allData;
}
console.log(mergeData(persons, att));




//EJERCICIO 9

let scores = [
  { name: 'Georg', email: 'georg@academlo.com', score: 100 },
  { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
  { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
]



function order(arr){
  return arr.sort((a, b) => a.score - b.score)
}

console.log(order(scores))

// EJERCICIO 10
let stu = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

let coun = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]

function countStudents(students, countries, countryName) { let total = 0;
  for(let i = 0; i < countries.length; i++ ){
      if (countries[i].name === countryName){
          for(let j = 0; j < students.length; j++){
              if(students[j].country_id === countries[i].id){
                  total ++;
              }
          }
      }
  }
  return total
}

console.log(countStudents(stu, coun, 'Colombia'))


// EJERCICIO 11


let alumnos = [
  { name: 'Daniela', age: 25 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 },
]

function findMostCommonAge(students) {
  // escribe tu solución aquí
  let countAge = {};
students.forEach(student =>countAge[student.age] = (countAge[student.age] || 0) + 1);
let ageFinal = Object.keys(countAge).reduce((a, b) => countAge[a] > countAge[b] ? a : b)
return parseInt(ageFinal)
  

}




// EJERCICIO 12

const users = [
  {
      name: 'Erik',
      gender: 'male',
      age: 22,
  },
  {
      name: 'Daniela',
      gender: 'female',
      age: 22,
  },
  {
      name: 'Gustavo',
      gender: 'male',
      age: 49,
  },
  {
      name: 'María',
      gender: 'female',
      age: 35,
  },
];

function findUser(users, name) {
 let found = users.filter(user => user.name === name)
 if(!found.length) return "user not found"
  return found  
}

console.log(findUser(users, 'Gustavo'))
