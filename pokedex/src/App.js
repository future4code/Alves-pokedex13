
import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './componentes,/NavBar';
import Searchbar from './componentes,/Searchbar';
import searchPokemon from ".api"
import  Pokedex  from './componentes,/pokedex';
import { getPokemons } from './api';




function App() {
   
  const [loading,setLoading] = useState(false);
  const [Pokemons,setPokemons] = useState([ ]);
  const fetchPokemons = async() => {
    try {
      setLoading(true)
      const result = await getPokemons();
     setPokemons(result);
     setLoading (false);
    } catch (error) {
      console.log("fetchpokemons error:", error);
    }
    
  }
  useEffect(() => {
    ///1 
    fetchPokemons();
    []
  
    return () => {
      second
    }
  }, [ ])
  
  
  return (
    <div>
     <Navbar/>
     <Searchbar/>
     <Pokedex Pokemons={Pokemons.results} loading={loading}/>
      </div>
  );
  
  }

export default App;
