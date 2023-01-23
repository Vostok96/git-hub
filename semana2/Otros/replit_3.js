// 13 encontrar a los usuarios que si hayan enviado su aplicacion a academlo
usuarios = [
    { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
    { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
    { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
  ];

  // function getApplications(users) {
  //   // escribe tu solución aquí
  //   // Recuerda que en esta prueba debes "retornar" el resultado
  //   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable usersWithApplications
  //   // return usersWithApplications;
  //   let valid = []
  //   for(i = 0; i < users.length; i++) {
  //     if (users[i].application !== null) {
  //       valid.push(users[i])
  //     }
  //   }
  //   return valid
  // }

  function countApplicationsByChannel(users) {
    let valid = []
    let frequency = {}
    for(i = 0; i < users.length; i++) {
      if (users[i].application !== null) {
        valid.push(users[i])
      }
    }
    for (let i = 0; i < valid.length; i++) {
      let user = valid[i];
      if (frequency[user.channel]) {
        frequency[user.channel]++;
      } else {
        frequency[user.channel] = 1;
      }
    };
    return frequency
  }

  console.log(countApplicationsByChannel(usuarios))

  // 14 Tu labor es sumar todos los números pares que se encuentren en el rango de los números recibidos, sin incluir a los dos números recibidos.

  function sumEvens(start, end) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable sum
    // return sum;
    let aSum = []
    let total = 0
    for ( i = start + 1; i < end; i++ ){
      if (i%2 === 0){
        aSum.push(i)
      }
    }
    for (j = 0; j < aSum.length; j++){
      total += aSum[j]
    }
    return total
  }


  // 16 

  let string = "Hola, me llamo Erik"

function countLetter(phrase, letter) {
    let arrLetters = phrase.split('');
    let cont = 0
    for (i = 0; i < arrLetters.length; i++){
      if (arrLetters[i] === letter){
        cont ++
      }
    }
    return cont
  }

  console.log(countLetter(string, 'a'))


  ///////////////////////
  let people = [
    { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
    { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
    { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
    { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
    ];


    function countApplicationsByChannel(students) {
     
       let canal = {}
       for (let i = 0; i < students.length; i++) {
        if (students[i].application !== null) {
          canal[students[i].channel] = (canal[students[i].channel] || 0) + 1
        }
      }
       
       return canal
   }
      console.log(countApplicationsByChannel(people))