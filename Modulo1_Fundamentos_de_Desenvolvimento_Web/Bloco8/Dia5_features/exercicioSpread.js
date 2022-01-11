/* Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .*/

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'uva', 'morango', 'maracujá', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['castanhas', 'amendoas', 'leite em pó'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...fruit, ...additional]
  return saladaDeFrutas
};

console.log(fruitSalad(specialFruit, additionalItens));