/* 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */

// função:
const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

// Teste:

describe('Testa se a função coloca as palavras com letra maiúscula', () =>{
    it('Trasnsforma a string "olá isso é um teste" em letras maiúsculas', (done) => {
        function callback(parametro) {
            try {
              expect(parametro).toBe('OLÁ ISSO É UM TESTE');
              done(); 
            } catch (error){
                done(error);
            }
            
        }
        uppercase('olá isso é um teste', callback);
    });
});