export const getPokemons = async (Pokemon) =>{
    try{ 
        let url = `https://pokeapi.co/api/v2/pokemon/${Pokemon}` 
        const response = fetch(url)
        return await response.json()
    }
    catch(error) {
        console.log("error:",error)

    }
}


export const searchPokemon = async (limit= 50, offset =  0) =>{
    try{ 
        let url = `https://pokeapi.co/api/v2/pokemon?Limite=${limit}&offset=${offset}` 
        const response = fetch(url)
        return await response.json()
    }
    catch(error) {
        console.log("error:",error)

    }
}

