import React from 'react';
import Botao from './botao';

const playButton = () => console.log('Oi! Eu sou o Goku!')
const playButton2 = () => console.log('You know nothing Jon Snow')
const playButton3 = () => console.log('Volte a forma humilde que merece CARTA CLOW')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Botao texto={playButton} nomeBotao="Dragon Ball"/>
        <Botao texto={playButton2} nomeBotao="GOT"/>
        <Botao texto={playButton3} nomeBotao="Sakura Card Captors"/>
        </header>
      </div>
    );
  }
}

export default App;
