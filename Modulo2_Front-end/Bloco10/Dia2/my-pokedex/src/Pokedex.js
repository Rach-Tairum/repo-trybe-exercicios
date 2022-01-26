import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const listaPokemons = pokemons.map(pokemon => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />
          })
        return(listaPokemons)
    }
}

export default Pokedex