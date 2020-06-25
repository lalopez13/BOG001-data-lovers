//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

var content = document.querySelector('#contenido')
var boton = document.querySelector('#boton')
boton.addEventListener('click',traer());

function traer(){
  

    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data =>{
        content.innerHTML=`
        <img src="${data.results[0].image}" alt="" width="500px">
      <p>Nombre:${data.results[5].name}</p>
      <p>status:${data.results[0].status}</p>
      <p>especie:${data.results[0].species}</p>
      <p>origen:${data.results[0].location.name}</p>
        `
    })
}