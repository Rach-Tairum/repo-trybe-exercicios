// Type Aliases
type Bird = {
  name: "quero-quero";
  color: "marrom";
}

type BirdAnwser = {
  wings: 2;
  beaks: 1;
  biped: true;
}

type SumAnwser = (x: number, y: number) => number;

type Algaritimos = {
  x: number;
  y: number;
}

function sum(obj: Algaritimos) {
  console.log(obj.x + obj.y)
}

sum({ x: 20, y: 50 })

type Address = {
  street: string,
  numb: number,
  complemet: string,
  bairro: string,
  cep: number,
  cidade: string
}

// Type Union
type Fisica = {
  liquido: string | number,
  gasoso: string | number,
  solido: string | number,
}

type StatesOfMatterAnwser = "liquid" | "solid" | "gaseous";

type Cpf = number | string;

type SO = 'linux' | 'mac' | 'windows';

type Vowels = "a" | "e" | "i" | "o" | "u";

// Classes 
enum DogColor {
  brown = 'Marrom',
  black = "Preto",
  white = "Branco",
  orange = "Caramelo",
} 

class Dog {
  raça: string;
  cor: DogColor;
  ownerName: string;
  dogName: string;

  constructor(raça: string, cor: DogColor, ownerName: string, dogName: string) {
    this.raça = raça;
    this.cor = cor;
    this.ownerName = ownerName;
    this.dogName = dogName
  }

  walk() {
    console.log(`${this.dogName} adora caminhar!`)
  }

  play() {
    console.log(`${this.dogName} adora brincar!`)
  }

  caracteristics() {
    console.log(`${this.dogName} é um ${this.raça} de pelo ${this.cor}`)
  }
}

