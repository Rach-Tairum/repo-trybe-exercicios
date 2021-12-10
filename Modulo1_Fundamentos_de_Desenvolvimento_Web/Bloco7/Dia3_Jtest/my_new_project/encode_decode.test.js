const {decode, encode} = require ('./encode_decode');

/* Para as funções encode e decode crie os seguintes testes em Jest:
ok Teste se encode e decode são funções;

ok Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

ok Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;

ok Teste se as demais letras/números não são convertidos para cada caso;

Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.*/

describe('Testando funções antigas', () => {
    test('é função?', () => {
        expect(typeof decode).toEqual('function');
        expect(typeof encode).toEqual('function');
    });

    test('transforma vogais em números', () => {
        expect(encode('aeiou')).toMatch('12345');
        expect(decode('12345')).toMatch('aeiou')
    });

    test('Não transforma consoantes em números', () => {
        expect(encode('bcg')).toMatch('bcg');
        expect(decode('678')).toMatch('678');
    });

    test('Strings do mesmo tamanho?', () => {
        expect(encode('ola!').length).toBe(4);
        expect(decode('ol1!').length).toBe(4);
    });
});