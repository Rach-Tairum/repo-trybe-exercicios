import React from "react"

class Input extends React.Component {
    render() {
        const {name, type, funcao, value} = this.props
        return (
            <label>
              {name}: <input name={name} type={type} onChange={funcao} value={value} />
              {value === '' || value === 0 ? "Por favor digite um nome ou idade validos" : " -Obrigada!- " }
            </label>
        )
    }
}

export default Input