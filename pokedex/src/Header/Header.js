import React from "react";
import pokemonLogo from "../assets/pokemonLogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => goToPokedex(navigate)}> Pokédex</Button>
      <img src={pokemonLogo} alt="Logo pokemon" />
    </div>
  );
};

export default Header;
