enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 2


enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log('ok', ok); //saída: 200
console.log('indice', indiceOk); //saída: 200
console.log('bad request', stringBadRequest); //saída: BadRequest

// enum - dias da semana
enum WeekDays {
  domingo = 1,
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
}

const fds = [WeekDays.domingo, WeekDays.sabado]
console.log('fds', fds);

// enum cores do arcoiris
enum ArcoIris {
  red = 'vermelho',
  orange = 'laranja',
  yellow = 'amarelo',
  green = 'verde',
  cian = 'azul',
  blue = 'anil',
  purple = 'roxo',
}

const rainbow = [ArcoIris.red, ArcoIris.blue, ArcoIris.cian, ArcoIris.green, ArcoIris.orange, ArcoIris.purple, ArcoIris.yellow]
console.log('arco-iris', rainbow);

// enum ações
enum OK {
  save,
  print,
  open,
  visual,
  close,
}

const imprimir = OK.print
console.log('impressora', imprimir);

// enum pontos cardeais
enum Cardeais {
  norte = 'N',
  sul = 'S',
  leste = 'L',
  oeste = 'O'
};
const direcao = `Os polos ficam a ${Cardeais.norte} e ao ${Cardeais.sul}`
console.log(direcao);
