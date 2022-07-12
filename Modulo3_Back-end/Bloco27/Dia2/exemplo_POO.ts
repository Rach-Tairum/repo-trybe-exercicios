// Exercicio 1 sobre Herança
class Superclass {
  constructor(public isSuper: boolean = true) { }

  public sayHello() {
    console.log("Olá mundo!!");
    
  }
}

class Subclass extends Superclass { }

function myFunc(s: Superclass) {
    return s.sayHello()
}

const super1 = new Superclass();
const sub1 = new Subclass()

myFunc(super1);
myFunc(sub1);

// --------------------------------------------------------------------------------------------------------
// Exercicio 2 de Herança - usar atributos protegidos
class Superclass2 {
  constructor(public isSuper: boolean = true) { }

  protected sayHello() {
    console.log("Olá mundo!!");
    
  }
}

class Subclass2 extends Superclass2 {
  public sayHello2() {
    this.sayHello()
  }
 }

function myFunc2(s: Subclass2) {
    return s.sayHello2()
}

// const super2 = new Superclass2();
const sub2 = new Subclass2()

// myFunc2(super2);
myFunc2(sub2);

// ------------------------------------------------------------------------------
// Exercicio 3 de Herança - usar o super
class Superclass3 {
  constructor(public isSuper: boolean = true) { }

  public sayHello() {
    console.log("Olá mundo!!");
    
  }
}

class Subclass3 extends Superclass3 {
  constructor() {
    super()
    this.isSuper = false
  }
}

function myFunc3(s: Superclass3) {
    if (s.isSuper) {
      console.log('Super!');
    } else {
      console.log('Sub!');
    }
}

const super3 = new Superclass3();
const sub3 = new Subclass3()

myFunc3(super3);
myFunc3(sub3);

// ----------------------------------------------------------------------------------
// Exercicio 4 - Interfaces
interface MyInterface {
  myNumber: number;

  myFunction(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunction(myParam: number): string {
    const sum = myParam + this.myNumber
    return `Esta é a soma de seus valores: ${sum}`
  }
}

const wth = new MyClass(35);

console.log(wth.myFunction(25));
