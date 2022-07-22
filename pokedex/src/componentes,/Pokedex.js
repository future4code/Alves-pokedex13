import React from "react";
import Pokemon from "./Pokemon";


const Pokedex = (props) => {
    const { pokemons, loading } = props;
    return (
        <div>
            <div className="pokedex-header">
                <hi>Pokedex</hi>
                <div>paginação:</div>
            </div>
            {loading ?(
            <div> carregando os pokemon, aguarde...</div>) :(
            <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                        <Pokemon key = { index }  pokemon={ pokemon } />
            );
            })}

        </div>
         )}
     </div>
 );
};
export default Pokedex