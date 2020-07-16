const pokemonFilter = {
  filterByType,
  checkEvolution,
  alphabeticOrder
}
//FILTRO POR ORDEN ALFABETICO
 function alphabeticOrder (data, sortBy, sortOrder){
    //sortBy referencia a la propiedad a ordenar
    if (sortBy === "name") {
      //sortOrder para la forma en la que va a ser ordenado
      if (sortOrder === "a-z") {
        data.sort((a, b) => { 
          if (a.name < b.name) {
            return -1
          }
        })
      } 
      if (sortOrder === "z-a") {
        data.sort((a, b) => {
          if (a.name > b.name) {
            return -1
          }
        })
       
      } 
      return data
    }
  }

//FILTRO POR TIPO
 function filterByType (data, type) {
  const pokemonTypes = data.filter((pokemon) => {
    //se usa operador logico para determinar cuando un pokemon 
    //con mas de un tipo cumpla con una de las condiciones 
    return (pokemon.type[0] === type || pokemon.type[1] === type);
  });
  return pokemonTypes; 
}

//FILTRO POR DEBILIDADES

// function filterByWeakness (data,type){
//uso de indexOf
// }

//FILTRO POR EVOLUCION
function checkEvolution(pokemon) {
  return pokemon.next_evolution || pokemon.prev_evolution
}

export default pokemonFilter