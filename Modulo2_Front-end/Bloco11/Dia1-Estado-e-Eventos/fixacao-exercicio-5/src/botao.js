import React from "react";

class Botao extends React.Component {
    render() {
        const { texto, nomeBotao, numero} = this.props
        return(
                <button onClick={texto} style={{backgroundColor: numero}}>{nomeBotao}</button>
        )
    }
}
export default Botao