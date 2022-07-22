import React from "react";
import { useState } from "react";

const Searchbar = (props) => {
  const [search, setSearch] = useState("Dito");
  const [pokemon, setPokemon] = useState();

  const onChangehandler = (e) => {
    setSearch(e.target.value);
  };
  const onbuttonClickhandler = () => {
    setSearch(search);

    const onSearchHandler = async (pokemon) => {
      const result = await searchPokemon(pokemon);
      setPokemon(result);
    };
    return (
      <div className="searchbar-container">
        <div className="searchbar">
          <input placeholder="Buscar Pokemon" onChange={onChangehandler} />
          <div className="searchbar-bnt">
            <button onClick={onbuttonClickhandler}>Buscar</button>
          </div>
          {pokemon ? (
            <div>
              <div> Nome:{pokemon.name}</div>
              <div> Peso:{pokemon.weight}</div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
};
export default Searchbar;
