import React, { Component } from 'react';
import ValidEmail from './ValidEmail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
  return (
      <div className="App">
      <label htmlFor="id-email">
        Email
        <input 
          id="id-email" 
          value={ email } 
          type="email" 
          onChange={ (e) => this.changeEmail(e.target.value) }
        />
      </label>
      <button 
        id="btn-send" 
        data-testid="id-send" 
        type="button" 
        onClick={ () => this.changeSaveEmail(email) }
        >
        Enviar
      </button>
      <input id="btn-back" type="button" value="Voltar" />
      <ValidEmail email={ saveEmail } />
    </div>
    );
  }
}

export default App;
