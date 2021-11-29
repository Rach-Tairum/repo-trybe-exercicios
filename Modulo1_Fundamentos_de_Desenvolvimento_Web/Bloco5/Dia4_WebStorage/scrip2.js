window.onload = function(){

let fundo = document.querySelector('#fundo')
let corTexto = document.querySelector('#corTexto')
let tamanho = document.querySelector('#tamanhoTexto')
let espaco = document.querySelector('#espacamento')
let tipo = document.querySelector('#tipo-de-texto')

function trocaCorDeFundo (cor){
    let fundoPagina = document.getElementById('body')
    let escolha1 = fundoPagina.style.backgroundColor = cor
    localStorage.setItem('fundo', escolha1);
   
}

fundo.addEventListener('change', function(){
    trocaCorDeFundo(fundo.value)
    
});

function trocaCorDeLetra (cor2){
    let corLetra = document.getElementById('body')
    let escolha2 = corLetra.style.color = cor2
    localStorage.setItem('letra', escolha2);
   
}

corTexto.addEventListener('change', function(){
    trocaCorDeLetra(corTexto.value)
    
});

function trocaTamanhoLetra (tamanho){
    let tamanhoTexto = document.getElementsByClassName('texto')

    for (let i = 0; i < tamanhoTexto.length; i += 1){
        let escolha3 = tamanhoTexto[i].style.fontSize = tamanho + 'px'
        localStorage.setItem('tamanhoTexto', escolha3);
    }
    
}

tamanho.addEventListener('change', function(){
   trocaTamanhoLetra(tamanho.value)
    
});
}