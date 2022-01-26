/* 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações. */

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
      const erro = new Error('Não temos esse pokémon para você :(')

    const callback1 = (pokemon) => pokemon.name === 'Pikachu';

    const callback2 = (onError, onSuccess) => {
        try {
            expect(onError).not.toBeNull();
            expect(onError).toEqual(erro)
            expect(onSuccess).toBeNull();
            done()
        } catch (error) {
            done(error);
        }
    }
    getPokemonDetails(callback1, callback2);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const callback1 = (pokemon) => pokemon.name === 'Charmander';

    const callback2 = (onError, onSuccess) => {
        try {
            expect(onError).toBeNull();
            expect(onSuccess).not.toBeNull();
            expect(onSuccess).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember')
            done()
        } catch (error) {
            done(error);
        }
    }
    getPokemonDetails(callback1, callback2);
  });
});