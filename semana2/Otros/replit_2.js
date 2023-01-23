
  users = [
    { name: 'Erik', email: 'erik@academlo.com' }, 
    { name: 'Georg', email: 'georg@academlo.com' }, 
    { name: 'Andrea', email: 'andrea@gmail.com' }
    ]

    function deleteUser(users, email) { 
        let con = []
        for (i = 0; i < users.length; i++) {    
        if (users[i].email !== email) {
          
           con.push(users[i])         
         } 
        }
        return con
    }

     // console.log(deleteUser(users,'erik@academlo.com'))
    //console.log(users[0].email)


    let students = [
      { name: 'Dani', age: 23},
      { name: 'Juan', age: 23},
      { name: 'Francisco', age: 23},
      { name: 'Ale', age: 21},
  ]
  let mostCommonAge = 0
  for (let i = 0; i < students.length; i++) {
     if (students[i].age >= students[i++].age){
        mostCommonAge = students[i].age
     }
  }
  return mostCommonAge
 
  //console.log(mostCommonAge())
