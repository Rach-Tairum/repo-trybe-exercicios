// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const bomDia = () => 'Acordado!!'
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const pausa = () => 'Bora tomar café!!'
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const boaNoite = () => 'Partiu dormir!!'
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

function doingThinghs(things) {
    console.log(things)
}

doingThinghs(bomDia());
doingThinghs(pausa());
doingThinghs(boaNoite());