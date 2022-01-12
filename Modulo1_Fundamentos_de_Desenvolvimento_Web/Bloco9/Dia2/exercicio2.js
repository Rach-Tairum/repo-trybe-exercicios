

function apresentaNoHTML(parametro) {
    const moeda = document.getElementById("listaMoedas")
    parametro.forEach((coin) => {
        const newLi = document.createElement('li');
        newLi.innerText = coin
        moeda.appendChild(newLi);
    })
}

async function criptomoedas() {
    const urlAPI = 'https://api.coincap.io/v2/assets'

    const response = await fetch(urlAPI);
    const data = await response.json();
    const moedas = data.data
    const moedasOrganizadas = moedas.filter((element) => element.rank <= 10).map((elemento) => {
        const Price = Number(elemento.priceUsd);
        return `${elemento.rank} - ${elemento.name} (${elemento.symbol}): ${Price.toFixed(2)}`
    })
    apresentaNoHTML(moedasOrganizadas)
}
criptomoedas()