import React from "react"

const Navbar =() =>{
    const logoImg= "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
return(
    <div>
        <nav>
             <img
              alt="pokeApi-logo"
              src={logoImg}
              className="navbar-img"/> 
        </nav>
    </div>
)
}
export default Navbar
