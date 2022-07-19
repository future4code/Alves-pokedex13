import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import DetailPokemon from "../pages/DetailPokemonPage/DetailPokemon";
import Pokedex from "../pages/PokedexPage/Pokedex";
import Header from "../Header/Header";

export const router = () => {
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Pokedex" element={<Pokedex />} />
      <Route path="/DetailPokemon" element={<DetailPokemon />} />
    </Routes>
  </BrowserRouter>;
};
