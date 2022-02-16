import React from 'react';
import Botao from './botao';



class App extends React.Component {
  constructor(){
    super()
    this.playButton = this.playButton.bind(this)
    this.playButton2 = this.playButton2.bind(this)
    this.playButton3 = this.playButton3.bind(this)
  }

  playButton() {
    console.log('Oi! Eu sou o Goku!')
  }

  playButton2() {
    console.log('You know nothing Jon Snow')
  }

  playButton3(){
    console.log('Volte a forma humilde que merece CARTA CLOW')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Botao texto={this.playButton} nomeBotao="Dragon Ball"/>
        <Botao texto={this.playButton2} nomeBotao="GOT"/>
        <Botao texto={this.playButton3} nomeBotao="Sakura Card Captors"/>
        </header>
      </div>
    );
  }
}

export default App;
