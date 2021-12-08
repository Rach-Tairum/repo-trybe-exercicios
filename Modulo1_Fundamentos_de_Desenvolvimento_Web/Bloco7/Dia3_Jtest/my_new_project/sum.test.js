/*A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")*/

const sum = require('./sum')

describe('testa somas', () => {
    // Teste se o retorno de sum(4, 5) é 9
    it('testa se 4 + 5 = 9', () => {
        expect(sum(4,5)).toBe(9);
    });
    // Teste se o retorno de sum(0, 0) é 0
    it('testa se 0 + 0 = 0', () => {
        expect(sum(0,0)).toBe(0);
    });
    // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
    it('testa se a função lança um erro se um dos parâmetros for uma string', () => {
        expect(() => sum(4, '5')).toThrow();
    });
    // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
    it('testa mensagem de erro', () => {
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
});
