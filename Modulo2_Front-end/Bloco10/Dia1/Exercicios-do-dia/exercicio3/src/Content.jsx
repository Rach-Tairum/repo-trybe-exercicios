import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

 const novosConteúdos = (value) => value.map((elemento) => {
    return <div>
        <h4>O conteúdo é: {elemento.conteudo}</h4>
        <p>Status: {elemento.status}</p>
        <p>Bloco: {elemento.bloco}</p>
    </div>
 })


class Content extends React.Component {
    render() {
        return(
            <div>
                {novosConteúdos(conteudos)}
            </div>
        )
    }
}

export default Content;