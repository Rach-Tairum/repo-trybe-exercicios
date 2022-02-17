const service = require('./service');

describe("Trabalha com a função 'geraNumeroAleatorio", () => {
  test('Testa função do numero aleatrio', () => {
    service.geraNumeroAleatório = jest.fn().mockReturnValue(10)

    service.geraNumeroAleatório();

    expect(service.geraNumeroAleatório).toHaveBeenCalled();
    expect(service.geraNumeroAleatório()).toBe(10);
    expect(service.geraNumeroAleatório).toHaveBeenCalledTimes(2)
  });

  test('Troca funcionalidade da função', () => {
    service.geraNumeroAleatório = jest.fn().mockImplementationOnce((a,b) => a/b);

    expect(service.geraNumeroAleatório(4,2)).toBe(2);
    expect(service.geraNumeroAleatório).toHaveBeenCalledTimes(1)
    expect(service.geraNumeroAleatório).toHaveBeenCalledWith(4,2)
  });

  test('Troca funcionalidade da função, parte 2', () => {
        service.geraNumeroAleatório = jest.spyOn(service, "geraNumeroAleatório").mockImplementation((a,b,c) => ((a*b)*c));
      // spy on pega o número de vezes q aparece no teste corrente e no teste anterior

        expect(service.geraNumeroAleatório(4,2,5)).toBe(40);
        expect(service.geraNumeroAleatório).toHaveBeenCalledTimes(2)
        expect(service.geraNumeroAleatório).toHaveBeenCalledWith(4,2,5)

        service.geraNumeroAleatório.mockReset();

        service.geraNumeroAleatório = jest.fn().mockImplementation((a) => a * 2);
        expect(service.geraNumeroAleatório(2)).toBe(4);
        expect(service.geraNumeroAleatório).toHaveBeenCalledTimes(1);
        expect(service.geraNumeroAleatório).toHaveBeenCalledWith(2)
    }); 
});

describe("Trabalha com as novas funções", () => {
    test("Troca funcionaliade de 'colocaEmMaiusculo'", () => {
        service.colocaEmMaiusculo = jest.spyOn(service, "colocaEmMaiusculo").mockImplementation((string) => string.toLowerCase());

        expect(service.colocaEmMaiusculo('AMOR')).toBe('amor');
        expect(service.colocaEmMaiusculo).toHaveBeenCalledTimes(1);
    })

    test("Troca funcionaliade de 'pegaPrimeiraLetra'", () => {
        service.pegaPrimeiraLetra = jest.fn().mockImplementation((string2) => string2[string2.length -1]);
    
        expect(service.pegaPrimeiraLetra('azul')).toBe('l');
        expect(service.pegaPrimeiraLetra).toHaveBeenCalledTimes(1);
    })

    test("Troca funcionaliade de 'concatenaStrings'", () => {
        service.concatenaString = jest.fn().mockImplementation((a,b,c) => a + b + c);

        expect(service.concatenaString('Amarelo', 'Azul', 'Branco')).toBe('AmareloAzulBranco');
        expect(service.pegaPrimeiraLetra).toHaveBeenCalledTimes(1);
    })

    test("Restaura funcionalidade de 'colocaEmMaiusculo'", () => {
        service.colocaEmMaiusculo.mockRestore();

        expect(service.colocaEmMaiusculo('amor')).toBe('AMOR');

    })
})

describe('Trabalha com API de fotos de dogues', () => {
    const imgDog = "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_4931.jpg"
    jest.spyOn(global, 'fetch')
    global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(imgDog),
      });
})


