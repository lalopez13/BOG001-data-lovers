import pokemonFilter from "./data.js";
import data from './data/pokemon/pokemon.js';

//VARIABLES
const datos = data.pokemon;
const text = document.getElementById("averagePoke");
const buttonHeight = document.getElementById("datosHeight");
const buttonWeight = document.getElementById("datosWeight");
const buttonChance = document.getElementById("datosSpawn");

//LISTENER
buttonHeight.addEventListener("click", showAverageHeight)
buttonWeight.addEventListener("click", showAverageWeight)
buttonChance.addEventListener("click", showAverageChance)

//GRAFICAS POKEMON WITH CHART.JS

//GRAFICA % TIPO DE POKEMON
//Esta funcion esta declarada ya y aca empiezo a dibujar mi canva 
function totalTypesChart(ctx) {
  //eslint-disable-next-line no-undef 
  new Chart(ctx, {
    //tipo de chart que quieren usar
    type: 'bar',
    data: {
      //las etiquetas que van el eje x
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
    },
    options: {
      responsive: true,
      maintainAspectRatio:false,
      scales: {
        xAxes: [{
                ticks: {
                 fontSize: 10
                }
               }]
             }

     }


  })
}
//GRAFICA DE PESO DE POKEMON
function totalWeightChart(ctx1) {
  //eslint-disable-next-line no-undef
 new Chart(ctx1, {
    type: "line",
    data: {
      datasets: [{
        label: "Peso pokemon kg",
        yAxisId:'A',
        data: datos.map(x => {
          return parseFloat(x.weight)
        }),
        borderColor: '#FC2F00',
        lineHeight: 2,
      },
      //{
//       label:"Altura pokemon cm",
//       yAxisId:'B',
//       data: datos.map(x => {return parseFloat(x.height)
// }),
// type:"bar",
//      backgroundColor: 'green',
//       lineHeight: 4,
//       }
    ],
    labels: datos.map(p => p.name),
    },
    options: {
      maintainAspectRatio:false,
      elements: {
        line: {
          borderWidth: 1,
          fill: false,
        },
        point: {
          radius: 2,
        }
      },
      tooltips: {
        mode: 'x',
      },
      scales: {
        yAxes: [{
          id: 'A',
          type:'linear',
          display:true,
          position: 'left',
         scaleLabel: {display: true, labelString: 'kg'}
 
        }], 
        // {
        //   id: 'B',
        //   display:true,
        //   type:'linear',
        //   position: 'right',
        //   scaleLabel: {display: true, labelString: 'mt'},
        //   ticks: {
        //     max: 9,
        //     min: 0,
        //     stepSize:1
        //   }
        // }]
      },
        responsive: true,    
    },
  })
}

//GRAFICA % DE LAS DIFERENTES TIPOS DE DEBILIDADES POKEMON
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

      }],
    },
    options: {
      
      responsive: true,
      maintainAspectRatio:false,
      title: {
        display: true,
        text: '% Debilidades pokemon segun tipo'
      },
      legend: {
display:false,
        
      },
    }
      

  })
}

//Funcion dibujar Charts
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
  text.innerHTML = `La posibilidad de atrapar un pokemon es ${pokemonFilter.averagePokemon(datos,"spawnChance")}`;
}
