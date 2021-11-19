let fundo = document.querySelector('#fundo')
let corTexto = document.querySelector('#corTexto')
let tamanho = document.querySelector('#tamanhoTexto')
let espaco = document.querySelector('#espacamento')
let tipo = document.querySelector('#tipo-de-texto')

function trocaCorDeFundo (cor){
    let fundoPagina = document.getElementById('body')
   fundoPagina.style.backgroundColor = cor

   
}

fundo.addEventListener('change', function(){
    trocaCorDeFundo(fundo.value)
})