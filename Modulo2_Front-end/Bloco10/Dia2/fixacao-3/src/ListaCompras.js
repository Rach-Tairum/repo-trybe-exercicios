import React from 'react';

class ListaCompras extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      return (<li key={index}>{ item }</li>);
    });
    return items
    }
}

export default ListaCompras;