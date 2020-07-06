
  //import { example } from './data.js';
  // import data from './data/lol/lol.js';
  //import data from './data/pokemon/pokemon.js';
  //import data from './data/rickandmorty/rickandmorty.js';
  
//variables
 const pokeData = data.pokemon
 console.log(pokeData[0].name)


let home = document.getElementById('home')

//MOSTRAR Y OCULTAR SECCIONES

function showSection(idVista) {
	let div = document.getElementById(idVista)
	// Se oculta el home y se muestra el div del PopUp
	div.style.display = "block";
	home.style.display = "none";
	// Se abre el PopUp
	div.querySelector('.modal-overlay').classList.add('active'); // Se activa el  modal overlay para el div determinado
	div.querySelector('.popup').classList.add('active'); // Se activa el PopUp para el div determinado 
	div.querySelector('.btn-cerrar-popup').addEventListener('click', function (e) { // se agrega la funcionalidad Click para el boton cerrar PopUp
		e.preventDefault();
		div.querySelector('.modal-overlay').classList.remove('active');
		div.querySelector('.popup').classList.remove('active');
	});
}

