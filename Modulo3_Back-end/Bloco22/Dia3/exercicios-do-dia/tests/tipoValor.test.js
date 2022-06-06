const tipoValor = require("../tipoValor");
const { expect } = require('chai');

const VALOR_POSITIVO = 3;
const VALOR_NEGATIVO = -5;
const VALOR_NEUTRO = 0;
const STRING = '0';

describe("Verifica se os valores recebidos na função são neutros, negativos ou positivos.", () => {

  describe("Verifica se é um valor é um número", () => {
    it("reposta", () => {
      try {
        tipoValor(STRING);
      } catch (error) {
        expect(error).to.has.property("message");
        expect(error.message).to.equal("Por favor digite um número")
      }
    });
  });

  describe("Verifica se o valor é:", () => {
    it("Positivo", () => {
      const resposta = tipoValor(VALOR_POSITIVO);
      expect(resposta).to.be.a("string");
      expect(resposta).to.be.equal("positivo")
    });
  });

  describe("Verifica se o valor é:", () => {
    it("Negativo", () => {
      const resposta = tipoValor(VALOR_NEGATIVO);
      expect(resposta).to.be.a("string");
      expect(resposta).to.be.equal("negativo")
    });
  });

  describe("Verifica se o valor é:", () => {
    it("Neutro", () => {
      const resp = tipoValor(VALOR_NEUTRO);
      expect(resp).to.be.a("string");
      expect(resp).to.be.equal("neutro")
    });
  });
})