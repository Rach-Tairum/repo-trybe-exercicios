import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      idade: 0,
      filmeFavorito: '',
      divertidamente: '',
      verifica: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <label>
              Nome: <input name='nome' type='text' value={this.state.nome} onChange={this.handleChange}></input>
            </label>

            <label>
              idade: <input name='idade' type='number' value={this.state.idade} onChange={this.handleChange}></input>
            </label>
            <label>
              Qual seu filme favortito e por que?
              <textarea name='filmeFavorito' value={this.state.filmeFavorito} onChange={this.handleChange}></textarea>
            </label>
          </fieldset>
          <label>
            Escolha seu Divertidamente:
            <select name='divertidamente' value={this.state.divertidamente} onChange={this.handleChange}>
              <option>Divertidamente</option>
              <option>Alegria</option>
              <option>Tristeza</option>
              <option>Raiva</option>
              <option>Medo</option>
              <option>Nojinho</option>
            </select>
          </label>

          <label>
            Essas informações estão corretas?
            <input name='verifica' type='checkbox' value={this.state.verifica} onChange={this.handleChange}></input>
          </label>

        {/* Inputs tipo aqruivo não podem ser controlados */}
          <label> 
            Acrescente aqui uma foto legal!
            <input type='file' />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
