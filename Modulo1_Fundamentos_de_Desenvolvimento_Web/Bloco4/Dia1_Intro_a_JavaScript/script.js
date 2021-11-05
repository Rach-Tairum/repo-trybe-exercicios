// Variáveis e Constantes
const myName = "Rachel";
const birthCity = "Rio de Janeiro";
var birthYear = 1996;
birthYear = 2030;
console.log(myName, birthCity, birthYear);

// Tipos Primitivos
let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);
console.log(typeof patientId);

const base = 5;
let height = 8;

const area = base * height;
console.log(area);

const perimetro = (2*base) + (2*height);
console.log (perimetro);

// if e else 
const notaNaTrybe = 5;

if (notaNaTrybe >= 80) {
    console.log ("Parabéns, você foi aprovada(o)!")
} else if (notaNaTrybe < 80 && notaNaTrybe >= 60) {
    console.log ("Você está na nossa lista de espera")
} else {
    console.log ("Você foi reprovada(o)")
}

// Operadores Lógicos
    // &&
const currentHour = 15;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!!!"
} else if (currentHour >= 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado"
}

console.log (message);

    // ||

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log ("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log ("FINALMENTE, descanso merecido UwU")
}

    // switch e case

let resultadoProcessoSeletivo = 'aprovada';

switch (resultadoProcessoSeletivo){
    case resultadoProcessoSeletivo = 'aprovada':
        console.log ("Parabéns, você foi aprovada(o)!");
    break;
    case resultadoProcessoSeletivo = 'lista':
        console.log ("Você está na nossa lista de espera");
    break;
    case resultadoProcessoSeletivo = 'reprovado':
        console.log ("Você foi reprovada(o)");
    break;
    default:
        console.log ('não se aplica')
    break;
}