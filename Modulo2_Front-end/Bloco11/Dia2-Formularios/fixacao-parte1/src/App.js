import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      idade: 0
    }
    this.handleAge = this.handleAge.bind(this)
  }

  handleAge(event) {
    this.setState({idade: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Nome: <input name='nome' type='text'></input>
          </label>

          <label>
            idade: <input name='idade' type='number' value={this.state.idade} onChange={this.handleAge}></input>
          </label>
          <label>
            Qual seu filme favortito e por que?
            <textarea name='filme-favorito'></textarea>
          </label>
        
          <label>
            Escolha seu Divertidamente:
            <select name='divertidamente'>
              <option>Divertidamente</option>
              <option>Alegria</option>
              <option>Tristeza</option>
              <option>Raiva</option>
              <option>Medo</option>
              <option>Nojinho</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default App;
