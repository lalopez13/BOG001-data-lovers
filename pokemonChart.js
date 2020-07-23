import pokemonFilter from "./data.js";
import data from './data/pokemon/pokemon.js';

//VARIABLES
const datos = data.pokemon
const text = document.getElementById("averagePoke");
const buttonHeight = document.getElementById("datosHeight");
const buttonWeight = document.getElementById("datosWeight");
const buttonChance = document.getElementById("datosSpawn");

//LISTENER
buttonHeight.addEventListener("click", showAverageHeight)
buttonWeight.addEventListener("click", showAverageWeight)
buttonChance.addEventListener("click", showAverageChance)

//GRAFICAS POKEMON WITH CHART.JS

function totalTypesChart(ctx) {
  //eslint-disable-next-line no-undef 
   new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        "Fire",
        "Grass",
        "Water",
        "Bug",
        "Ghost",
        "Flying",
        "Fighting",
        "Normal",
        "Poison",
        "Ground",
        "Rock",
        "Psychic",
        "Ice",
        "Electric",
        "Dragon"
      ],
      datasets: [{
        label: '% Tipos de pokemon',
        data: [
          pokemonFilter.percentageByPokemonType(datos, "Fire"),
          pokemonFilter.percentageByPokemonType(datos, "Grass"),
          pokemonFilter.percentageByPokemonType(datos, "Water"),
          pokemonFilter.percentageByPokemonType(datos, "Bug"),
          pokemonFilter.percentageByPokemonType(datos, "Ghost"),
          pokemonFilter.percentageByPokemonType(datos, "Flying"),
          pokemonFilter.percentageByPokemonType(datos, "Fighting"),
          pokemonFilter.percentageByPokemonType(datos, "Normal"),
          pokemonFilter.percentageByPokemonType(datos, "Poison"),
          pokemonFilter.percentageByPokemonType(datos, "Ground"),
          pokemonFilter.percentageByPokemonType(datos, "Rock"),
          pokemonFilter.percentageByPokemonType(datos, "Psychic"),
          pokemonFilter.percentageByPokemonType(datos, "Ice"),
          pokemonFilter.percentageByPokemonType(datos, "Electric"),
          pokemonFilter.percentageByPokemonType(datos, "Dragon")
        ],
        backgroundColor: [
          '#ec8c3e',
          '#74ca55',
          '#46a9ed',
          '#a8b736',
          '#9889cc',
          '#94b7f4',
          '#9b4840',
          '#c2b8a0',
          '#833fa0',
          '#c8ab63',
          '#a8865d',
          '#f5779e',
          '#6ed7e9',
          '#fad33e',
          '#3b3aba'

        ],

      }, ]
    }
  })
}
// function totalWeightChart(ctx1) {
//   //let data = datapoke
//     const chartTwo = new Chart(ctx1, {
//       type: 'line',
//       data: { 
//         labels:[25,50,75,100,125,150,200,225],
//         datasets:[
// {
//   label:"Weight",
//   data: [datos.map(pokemon => pokemon.candy)]
// },
//         ]


//     },
//   options:{
//     scales:{
//       yAxes:[{
//         tickls:{
//           beginAtZero:true
//         }
//       }]

//     }
//   }
//  })
//   }

function totalWeightChart(ctx1) {
//eslint-disable-next-line no-undef
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: [datos.map(pokemon => pokemon.weight)],
      datasets: [{
        label: "Peso  pokemon Kg",
        data: [datos.map(pokemon => pokemon.height)],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        lineTension: 0.1
      }]
    }
  })
}

function totalPokeWeak(ctx2) {
 //eslint-disable-next-line no-undef 
 new Chart(ctx2, {
    type: 'doughnut',

    data: {
      labels: [
        "Fire",
        "Grass",
        "Water",
        "Bug",
        "Ghost",
        "Flying",
        "Fighting",
        "Poison",
        "Ground",
        "Rock",
        "Psychic",
        "Ice",
        "Electric",
        "Dragon",
        "Dark",
        "Fairy",
        "Steel"
      ],
      datasets: [{
        label: 'Tipos de pokemon',
        data: [
          pokemonFilter.percentageByPokemonWeakness(datos, "Fire"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Grass"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Water"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Bug"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Ghost"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Flying"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Fighting"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Poison"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Ground"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Rock"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Psychic"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Ice"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Electric"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Dragon"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Dark"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Fairy"),
          pokemonFilter.percentageByPokemonWeakness(datos, "Steel")
        ],
        backgroundColor: [
          '#ec8c3e',
          '#74ca55',
          '#46a9ed',
          '#a8b736',
          '#9889cc',
          '#94b7f4',
          '#9b4840',
          '#833fa0',
          '#c8ab63',
          '#a8865d',
          '#f5779e',
          '#6ed7e9',
          '#fad33e',
          '#3b3aba',
          '#353D2F',
          '#CC7178',
          '#6D6466'

        ],

      }, ]
    }
  })
}

function drawChart() {
  const ctx = document.querySelector("#pokeStats").getContext('2d')
  const ctx1 = document.querySelector("#pokeWeigth").getContext('2d')
  const ctx2 = document.querySelector("#pokeWeakness").getContext('2d')
  totalTypesChart(ctx)
  totalWeightChart(ctx1)
  totalPokeWeak(ctx2)
}
drawChart()
//MOSTRAR MENSAJE DE ESTADISTICAS POKEMON

function showAverageHeight() {
  text.innerHTML = `El promedio de altura pokemon es ${pokemonFilter.averagePokemon(datos,"height")}`;
}

function showAverageWeight() {
  text.innerHTML = `El promedio de peso pokemon es ${pokemonFilter.averagePokemon(datos,"weight")}`;
}

function showAverageChance() {
  text.innerHTML = `El promedio de aparición de un pokemon es ${pokemonFilter.averagePokemon(datos,"spawnChance")}`;
}
