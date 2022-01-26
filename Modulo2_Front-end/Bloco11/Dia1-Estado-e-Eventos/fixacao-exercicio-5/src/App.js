import React from "react";
import Botao from "./botao"

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      marcoInicialDB: 0,
      marcoInicialGOT: 0,
      marcoInicialSCC: 0
    }

    this.playButton = this.playButton.bind(this)
    this.playButton2 = this.playButton2.bind(this)
    this.playButton3 = this.playButton3.bind(this)

  }

  playButton() {
    this.setState((estadoInicial, _props) => ({marcoInicialDB: estadoInicial.marcoInicialDB + 1}))
    console.log('Oi! Eu sou o Goku!', this.state.marcoInicialDB)
  }

  playButton2() {
    this.setState((estadoInicial, _props) => ({marcoInicialGOT: estadoInicial.marcoInicialGOT + 1}))
    console.log('You know nothing Jon Snow', this.state.marcoInicialGOT)
  }

  playButton3(){
    this.setState((estadoInicial, _props) => ({marcoInicialSCC: estadoInicial.marcoInicialSCC + 1}))
    console.log('Volte a forma humilde que merece CARTA CLOW', this.state.marcoInicialSCC)
  }

  render() {
    return (
        <div className="App">
          <Botao texto={this.playButton} nomeBotao="Dragon Ball"/>
          <Botao texto={this.playButton2} nomeBotao="GOT"/>
          <Botao texto={this.playButton3} nomeBotao="Sakura Card Captors"/>
        </div>
      );
  }
}

export default App;
