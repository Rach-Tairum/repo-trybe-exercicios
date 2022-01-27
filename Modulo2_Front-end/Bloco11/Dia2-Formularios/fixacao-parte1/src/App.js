import './App.css';
import React from 'react';
import Input from './Input';

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
            <Input name='nome' type='text' funcao={this.handleChange} value={this.state.name} />
            <Input name='idade' type='number' funcao={this.handleChange} value={this.state.idade} />

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
