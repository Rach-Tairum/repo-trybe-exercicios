/* Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo: */

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const { name, age, likes} = alex
  const { name: pessoa, age: anos, likes: interesses} = gunnar
  

  const personLikes = (nome, idade, gostos) => `${nome} is ${idade} years old and likes ${gostos.join(', ')}.`;
  
  console.log(personLikes(name, age, likes)) // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(pessoa, anos, interesses)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'