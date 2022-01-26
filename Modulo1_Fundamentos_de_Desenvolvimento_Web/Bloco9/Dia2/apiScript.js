// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

async function fetchJoke() {
  const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
  };

  const response = await fetch(API_URL, myObject); // retorno na promisse
  const data = await response.json(); // retorno específico da promisse, o que de fato queremos vindo da api
  const piadaPronta = document.getElementById("jokeContainer")
  piadaPronta.innerHTML = data.joke;
};


window.onload = () => fetchJoke();
