import rp from "request-promise"
const url = 'http://pokeapi.co/api/v2/'

function getPokemon(offset, limit){
    const options = {
        uri: `${url}pokemon/`,
        qs: {
            offset,
            limit
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    
    return rp(options)
        .then(function (data) {
            return data.results
            
        })
        .catch(function (err) {
            console.err(err)
        });
}

async function pokemonName(nameP){
    
    const hola = await getPokemon(0,150)
    
    for(let i=0; i < hola.length; i++){
        if (hola[i].name == nameP.toLowerCase())
            return hola[i].name  
      }
    return 'Error 404: Pokemon Not Found' 
      

}

async function pokemonFirstChar(letter){
    
    const pokemonList = await getPokemon(0,150)
    const pokemonFilter = []
    
    for(let i=0; i < pokemonList.length; i++){
        if (pokemonList[i].name.charAt(0) == letter.toLowerCase())
            pokemonFilter.push(await pokemonList[i].name)
    }
    const size = pokemonFilter.length
    if ( size == 0 )
        return 'Not Pokemon Found With That Letter'
    else
        return pokemonFilter
}

export { getPokemon, pokemonFirstChar, pokemonName };
