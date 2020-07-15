const pokemonFilter = {
  checkEvolution,
  alphabeticOrder: (data, sortBy, sortOrder) => {
    //sortBy referencia a la propiedad a ordenar
    if (sortBy === "name") {
      //sortOrder para la forma en la que va a ser ordenado
      if (sortOrder == "pokedex") {
        return data
      }
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
}
// function filterByType()
// //BUSCAR POKEMON TIPO
// var filtered = datapoke.filter(function (pokemon) {
//   return pokemon.type == "Poison";
// });
// console.log(filtered);
function checkEvolution(pokemon) {
  return pokemon.next_evolution || pokemon.prev_evolution
}

export default pokemonFilter