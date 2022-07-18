import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import DetalhePokemon from "../pages/detalhePokemon/DetalhePokemon";
import Pokedex from "../pages/pokedex/Pokedex";

export const router = () => {
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Pokedex" element={<Pokedex />} />
      <Route path="/DetalhePokemon" element={<DetalhePokemon />} />
    </Routes>
  </BrowserRouter>;
};
