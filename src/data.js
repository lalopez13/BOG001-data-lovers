const pokemonFilter = {
    checkEvolution,
    alphabeticOrder:(name)=>{
     return function(a, b) {  
         if (a[name] > b[name]) {  
             return 1;  
         } else if (a[name] < b[name]) {  
             return -1;  
         }
  
  }
    }
   }

   function checkEvolution(pokemon) {
    return pokemon.next_evolution || pokemon.prev_evolution
  }
  
  export default pokemonFilter