const geraNumeroAleatório = () => Math.round(Math.random() * 100);

const colocaEmMaiusculo = (string) => string.toUpperCase();

const pegaPrimeiraLetra = (string2) => string2[0]

const concatenaString = (palavra1, palavra2) => palavra1 + palavra2 

const fotosDeDoguinhos = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json();
    return data.message;
}

module.exports = { geraNumeroAleatório, colocaEmMaiusculo, pegaPrimeiraLetra, concatenaString };