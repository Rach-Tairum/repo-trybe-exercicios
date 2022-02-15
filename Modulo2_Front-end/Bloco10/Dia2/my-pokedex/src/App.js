import React from "react";
import Pokedex from "./Pokedex";

class App extends React.Component {
  render() {
    return (
      <div className="todosPokemons">
        <img 
        src='https://cutewallpaper.org/21/pokedex-phone-wallpaper/Pokedex-Wallpaper-46-Group-Wallpapers.png' alt="poxedex"/>
        <Pokedex />
      </div>
    );
  }
  
}

export default App;
