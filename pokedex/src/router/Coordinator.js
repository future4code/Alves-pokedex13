import { Navigate, useNavigate } from "react-router-dom";

export const gotDetailPokemon = () => {
  Navigate(`/detalhe`);
};

export const gotHome = () => {
  Navigate(`/Home`);
};
export const gotPokedex = () => {
  Navigate(`/Pokedex`);
};
