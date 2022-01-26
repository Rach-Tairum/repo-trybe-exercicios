import React from "react";

class Botao extends React.Component {
    render() {
        const { texto, nomeBotao } = this.props
        return(
                <button onClick={texto}>{nomeBotao}</button>
        )
    }
}
export default Botao