// Exemplo 1
// adiciona um item em um objeto

const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);

// Exemplo acima usando variáveis

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);
  let endereco = 'city'
  const city = 'London'
  customer[endereco] = city
  console.log(customer)

// Exemplo 2 - Pegando as chaves de um objeto

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(property);
  }

// Exemplo 2 usando object.keys

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

  console.log(Object.keys(coolestTvShow));
  
// Exemplo 3 capturando chaves e valores

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
  };

function talentos(student) {
  let talentos = Object.keys(student)
  let techTalento = [] 
  for (let i in talentos){
        techTalento.push(`Skill: ${talentos[i]}, Nível: ${student[talentos[i]]}`)
  }
  console.log(techTalento)
}  
talentos(student1)

talentos(student2)

// Exemplo 4 -pegando os valores com For-in

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(coolestTvShow[property]);
  }

// Exemplo 4 usando Object value

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

console.log(Object.values(coolestTvShow))

// Exemplo 5 - lista de habilidades do estudante com e sem object values

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(let skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));

// Exemplo 6 juntando chave e valor com object.entries

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));

// Exemplo 7

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

// Exemplo 8 - Object assing

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)

// Exemplo 9

const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }

  clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// Exemplo 10 - Criando um novo objeto a partir de dois outros

const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);

