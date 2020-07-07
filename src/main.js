
  //import { example } from './data.js';
  // import data from './data/lol/lol.js';
  import data from './data/pokemon/pokemon.js';
  //import data from './data/rickandmorty/rickandmorty.js';
  
//variables
 const pokeData = data.pokemon
 console.log(pokeData[1].type[0])


 // fetch('./data/pokemon/pokemon.json')
//     .then(res => res.json())
//     .then(datos => {
//         console.log("Hola " + pokeData.length)

// let pokeDatos = pokeData
// 	})

let home = document.getElementById('home')

let boton1 = document.getElementById('pokedex')
let boton2 = document.getElementById('evolution')
let boton3 = document.getElementById('bonusMap')

let vista1 = document.getElementById('dexter')
let vista2 = document.getElementById('Evolucion')
let vista3 = document.getElementById('Mapa')

let element = document.getElementById('pokeDex')


//MOSTRAR Y OCULTAR SECCIONES

// function showSection(idVista) {
// 	let div = document.getElementById(idVista)
// 	// Se oculta el home y se muestra el div del PopUp
// 	div.style.display = "block";
// 	home.style.display = "none";
// 	// Se abre el PopUp
// 	div.querySelector('.modal-overlay').classList.add('active'); // Se activa el  modal overlay para el div determinado
// 	div.querySelector('.popup').classList.add('active'); // Se activa el PopUp para el div determinado 
// 	div.querySelector('.btn-cerrar-popup').addEventListener('click', function (e) { // se agrega la funcionalidad Click para el boton cerrar PopUp
// 		e.preventDefault();
// 		div.querySelector('.modal-overlay').classList.remove('active');
// 		div.querySelector('.popup').classList.remove('active');
// 	});
// }


function change(boton,vista){
	boton.addEventListener("click", function(){
		vista.style.display = "block";
		home.style.display = "none";

		//Se abre el PopUp
    vista.querySelector('.modal-overlay').classList.add('active'); // Se activa el  modal overlay para el div determinado
	vista.querySelector('.popup').classList.add('active'); // Se activa el PopUp para el div determinado 
	vista.querySelector('.btn-cerrar-popup').addEventListener('click', function (e) { // se agrega la funcionalidad Click para el boton cerrar PopUp
		e.preventDefault();
		vista.querySelector('.modal-overlay').classList.remove('active');
		vista.querySelector('.popup').classList.remove('active');

	})
	})
}
change(boton1,vista1)
change(boton2,vista2)
change(boton3,vista3)




for(let i = 0; i <pokeData.length; i++) {
          
	var card = document.createElement("div")
	card.id = "divCard"
	card.classList.add('card')
	element.appendChild(card)

	var img = document.createElement('img')
	img.setAttribute("src", pokeData[i].img)
	img.setAttribute("width", "100px")
	card.appendChild(img)

	var tag = document.createElement("h3")
	var text = document.createTextNode(pokeData[i].name)
	tag.appendChild(text)
	tag.style.textTransform = "uppercase"
	tag.style.fontWeight = "600"
	card.appendChild(tag)

	var divType = document.createElement("div")
	divType.classList.add('pokemonType')
	card.appendChild(divType)

	var type = document.createElement("p")
	var textType = document.createTextNode(pokeData[i].type)
	type.appendChild(textType)
	card.appendChild(type)
}
	
