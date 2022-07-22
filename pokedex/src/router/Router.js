import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import DetailPokemon from "../pages/DetailPokemonPage/DetailPokemon";
import Pokedex from "../pages/PokedexPage/Pokedex";
import Header from "../Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Home />} />

        <Route exact path={"/pokedex"} element={<Pokedex />} />

        <Route exact path={"/pokemon/:id"} element={<DetailPokemon />} />

        <Route exact path={"*"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
