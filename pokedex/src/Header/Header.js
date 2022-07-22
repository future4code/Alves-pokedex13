import React from "react";
import pokemonLogo from "../assets/pokemonLogo.png";

const Header = () => {
  return (
    <div>
      <img src={pokemonLogo} alt="Logo pokemon" />
    </div>
  );
};

export default Header;
