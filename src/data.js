//import data from './data/pokemon/pokemon.js';
const pokemonFilter = {
  filterByType,
  checkEvolution,
  alphabeticOrder,
  filterByName,
  filterByWeakness,
  percentageByPokemonType,
  percentageByPokemonWeakness,
  averagePokemon
}

//FILTRO POR ORDEN ALFABETICO
function alphabeticOrder(data, sortBy, sortOrder) {
  //sortBy referencia a la propiedad a ordenar
  //if (sortBy === "name") {
  //sortOrder para la forma en la que va a ser ordenado
  if (sortBy === "name" && sortOrder === "a-z") {
    data.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
    })
  }
  if (sortBy === "name" && sortOrder === "z-a") {
    data.sort((a, b) => {
      if(a.name > b.name){
      return -1
      }
    })
  }
  return data
}

//FILTRO POR TIPO
function filterByType(data, type) {
  const pokemonTypes = data.filter((pokemon) => {
    //se usa operador logico para determinar cuando un pokemon 
    //con mas de un tipo cumpla con una de las condiciones 
    return (pokemon.type[0] === type || pokemon.type[1] === type)
  });
  return pokemonTypes
}
//FILTRO POR NOMBRE
function filterByName(data, option) {
  const pokemonName = data.filter(pokemones => {
    return pokemones.name.toLowerCase().includes(option)
  })
  return pokemonName
}
//FILTRO POR DEBILIDADES
function filterByWeakness(data, option) {
  const pokemonWeakness = data.filter((pokemon) => pokemon.weaknesses.includes(option))
  return pokemonWeakness
}
//FILTRO POR EVOLUCION
function checkEvolution(pokemon) {
  return pokemon.next_evolution || pokemon.prev_evolution
}
// ESTADISTICAS
//TIPO
function percentageByPokemonType(data, type) {
  const datos = data.length
  const types = filterByType(data, type).length
  const percent = (types / datos * 100).toFixed(2)
  return percent
}
//DEBILIDAD
function percentageByPokemonWeakness(data, type) {
  const datos = data.length
  const types = filterByWeakness(data, type).length
  const percent = (types / datos * 100).toFixed(2)
  return percent
}
//PROMEDIO
function averagePokemon(datos, option) {
  if (option === "weight") {
    const sum = datos.reduce((acc, pokemon) => parseFloat(pokemon.weight) + acc, 0)
    const resultWeight = parseFloat((sum / datos.length).toFixed(2)) + "kg"
    return resultWeight
  } else if (option === "height") {
    const sum = datos.reduce((acc, pokemon) => parseFloat(pokemon.height) + acc, 0)
    const resultHeight = parseFloat((sum / datos.length).toFixed(2)) + "m"
    return resultHeight
  } else {
    const sum = datos.reduce((acc, pokemon) => parseFloat(pokemon.spawn_chance) + acc, 0)
    const resultChance = parseFloat((sum / datos.length).toFixed(2))
    return resultChance
  }
}

export default pokemonFilter
