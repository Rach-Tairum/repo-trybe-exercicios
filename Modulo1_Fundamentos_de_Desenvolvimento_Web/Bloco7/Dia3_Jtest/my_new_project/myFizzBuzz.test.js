/* A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
ok Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

ok Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

ok Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

ok Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado*/

const myFizzBuzz = require('./myFizzBuzz')

describe('testa a função my Fizz Buzz', () => {
    it('Verifica se "FizzBuzz" é verdadeiro', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('testa se "Fizz" é verdadeiro', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    it('testa se "Buzz" é verdadeiro', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    });

    it('testa se ao inserir um número que não é divisivel por 3 ou 5 o retorno é o próprio número', () => {
        expect(myFizzBuzz(2)).toBe(2)
    });

    it('testa se o valor inserido na função é um número', () => {
        expect(myFizzBuzz('10')).toBe(false)
    });
});