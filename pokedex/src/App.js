
import './App.css';
import Navbar from './componentes,/NavBar';
import Searchbar from './componentes,/Searchbar';
import {searchPokemon} from ".api"

function App() {
  const onSearchHandler = async (pokemon) =>{
    const result= await searchPokemon(pokemon)

  }
  return (
    <div>
     <Navbar/>
     <Searchbar
     onSearch={onSearchHandler}/>
      <div className='App'>

      </div>
   
   </div>
  );
}

export default App;
