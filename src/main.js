//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';

//variables
//    const datapoke = data.pokemon
//    console.log(datapoke[1].type[0])
let home = document.getElementById('home')
let element = document.getElementById('pokeDex')
var elementModal = document.getElementById('modal')

let boton1 = document.getElementById('pokedex')
let boton2 = document.getElementById('evolution')
let boton3 = document.getElementById('bonusMap')

let vista1 = document.getElementById('dexter')
let vista2 = document.getElementById('Evolucion')
let vista3 = document.getElementById('Mapa')


fetch('./data/pokemon/pokemon.json')
  .then(res => res.json())
  .then(datos => {
    const datapoke = datos.pokemon
    console.log("soy yo " + datapoke.length)

    //CREAR CARDS POKEMON
    for (let i = 0; i < datapoke.length; i++) {
      // if(datapoke[i].next_evolution || datapoke[i].prev_evolution ){
      var card = document.createElement("div")
      card.id = "divCard"
      card.classList.add('card')
      element.appendChild(card)

      var img = document.createElement('img')
      img.setAttribute("src", datapoke[i].img)
      img.setAttribute("width", "100px")
      card.appendChild(img)

      var tag = document.createElement("h3")
      var text = document.createTextNode(datapoke[i].name)
      tag.appendChild(text)
      tag.style.textTransform = "uppercase"
      tag.style.fontWeight = "600"
      card.appendChild(tag)

      var divType = document.createElement("div")
      divType.classList.add('pokemonType')
      card.appendChild(divType)

      var type = document.createElement("p")
      var textType = document.createTextNode(datapoke[i].type)
      type.appendChild(textType)
      card.appendChild(type)

      //------------- TARJETA MODAL PARA CADA POKEMON CUANDO SE SELECCIONA----------- 

      var cardInfo = document.createElement("div");
      cardInfo.setAttribute("width:300px", "height:200px");
      cardInfo.id = "divCardInfo";
      cardInfo.classList.add("cardInfo");
      elementModal.appendChild(cardInfo);

      var divTypeInfo = document.createElement("div");
      divTypeInfo.classList.add("pokemonType");
      cardInfo.appendChild(divTypeInfo);

      var imgInfo = document.createElement("img");
      imgInfo.setAttribute("src", datos.pokemon[i].img);
      imgInfo.setAttribute("width", "100px");
      cardInfo.appendChild(imgInfo);

      var tagInfo = document.createElement("h3");
      var textInfo = document.createTextNode(datos.pokemon[i].name);
      tagInfo.appendChild(textInfo);
      tagInfo.style.textTransform = "uppercase";
      tagInfo.style.fontWeight = "600";
      cardInfo.appendChild(tagInfo);

      var typeInfoTitle = document.createElement("p");
      typeInfoTitle.classList.add("tipoTitle");
      var textTypeTitle = document.createTextNode("Tipo");
      typeInfoTitle.appendChild(textTypeTitle);
      cardInfo.appendChild(typeInfoTitle);


      var infoTitle = document.createElement("p");
      infoTitle.classList.add("infoTitle");
      var textInfoTitle = document.createTextNode("CARACTERISTICAS");
      infoTitle.appendChild(textInfoTitle);
      cardInfo.appendChild(infoTitle);

      var typeInfoHeight = document.createElement("p");
      typeInfoHeight.classList.add("height-text")
      var textHeight = document.createTextNode(
        "Altura: " + datos.pokemon[i].height
      );
      typeInfoHeight.appendChild(textHeight);
      cardInfo.appendChild(typeInfoHeight);

      var typeInfoWeight = document.createElement("p");
      var textWeight = document.createTextNode("Peso: " + datos.pokemon[i].weight);
      typeInfoWeight.classList.add("weight-text")
      typeInfoWeight.appendChild(textWeight);
      cardInfo.appendChild(typeInfoWeight);

      var weakTitle = document.createElement("p");
      weakTitle.classList.add("weakTitle");
      var weakInfoTitle = document.createTextNode("DEBILIDADES");
      weakTitle.appendChild(weakInfoTitle);
      cardInfo.appendChild(weakTitle);

      var weakTypeInfo = document.createElement("div");
      weakTypeInfo.classList.add("weakPokemonType");
      cardInfo.appendChild(weakTypeInfo);

      var weak = document.createElement("p");
      var textWeak = document.createTextNode(datos.pokemon[i].weaknesses);
      weak.appendChild(textWeak);
      weak.classList.add("weaks")
      cardInfo.appendChild(weak);


      // IDENTIFICADOR DE COLOR POR TIPO PARA CADA POKEMON         
      let colores = [];

      for (let value of datos.pokemon[i].type) {

        console.log(value)
        switch (value) {
          case 'Fire':
            divType.style.backgroundColor = "#ec8c3e"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(236,140,62,1) 0%, rgba(214,96,45,1) 100%)"
            //  weakTypeInfo.style.backgroundColor ="#ec8c3e"
            colores.push("#ec8c3e")
            break;

          case 'Water':
            divType.style.backgroundColor = "#46a9ed"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(70,169,237,1) 0%, rgba(62,75,247,1) 100%)"
            colores.push("#46a9ed")
            break;

          case 'Poison':
            divType.style.backgroundColor = "#833fa0"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(131,63,160,1) 0%, rgba(66,24,84,1) 100%)"
            colores.push("#833fa0")
            break;

          case 'Grass':
            divType.style.backgroundColor = "#75ca55"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(117,202,85,1) 0%, rgba(63,125,40,1) 100%)"
            colores.push("#75ca55")
            break;

          case 'Bug':
            divType.style.backgroundColor = "#a8b736"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(168,183,54,1) 0%, rgba(122,133,40,1) 100%)"
            colores.push("#a8b736")
            break;

          case 'Normal':
            divType.style.backgroundColor = "#c2b8a0"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(194,184,160,1) 0%, rgba(117,107,84,1) 100%)"
            colores.push("#c2b8a0")
            break;

          case 'Psychic':
            divType.style.backgroundColor = "#f5779e"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(245,119,158,1) 0%, rgba(168,66,98,1) 100%)"
            colores.push("#f5779e")
            break;

          case 'Flying':
            divType.style.backgroundColor = "#94b7f4"
            divTypeInfo.style.background = " linear-gradient(0deg, rgba(148,183,244,1) 0%, rgba(86,116,168,1) 100%)"
            colores.push("#94b7f4")
            break;

          case 'Ghost':
            divType.style.backgroundColor = "#9889cc"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(152,137,204,1) 0%, rgba(85,73,128,1) 100%)"
            colores.push("#9889cc")
            break;

          case 'Electric':
            divType.style.backgroundColor = "#fad33e"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(250,211,62,1) 0%, rgba(173,144,26,1) 100%)"
            colores.push("#fad33e")
            break;

          case 'Ground':
            divType.style.backgroundColor = "#c8ab63"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(200,171,99,1) 0%, rgba(122,101,48,1) 100%)"
            colores.push("#c8ab63")
            break;

          case 'Fighting':
            divType.style.backgroundColor = "#9b4840"
            divTypeInfo.style.background = " linear-gradient(0deg, rgba(155,72,64,1) 0%, rgba(79,29,25,1) 100%)"
            colores.push("#9b4840")
            break;

          case 'Rock':
            divType.style.backgroundColor = "#a8865d"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(168,134,93,1) 0%, rgba(92,69,41,1) 100%)"
            colores.push("#a8865d")
            break;

          case 'Ice':
            divType.style.backgroundColor = "#6ed7e9"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(110,215,233,1) 0%, rgba(58,141,156,1) 100%)"
            colores.push("#6ed7e9")
            break;

          case 'Dragon':
            divType.style.backgroundColor = "#3b3aba"
            divTypeInfo.style.background = "linear-gradient(0deg, rgba(59,58,186,1) 0%, rgba(23,23,110,1) 100%)"
            colores.push("#3b3aba")
            break;

          default:
            divType.style.backgroundColor = "black"
            break;
        }
        if (colores.length == 2) {
          divType.style.background = "linear-gradient(to right," + colores[0] + ", " + colores[1] + ")"
          console.log("TENGO DOS TIPOS")
        }


        console.log(datapoke[i].name, "")
      }



    }

    let carta = document.querySelectorAll("#divCard")
    //var modals = document.querySelectorAll(".modal-container")
    for (let i = 0; i < carta.length; i++) {
      carta[i].addEventListener("click", function show() {
        //  for(let i= 0; i < modals.length;i++){
        //    console.log(modals.length + "somos modales")

        //   modals[i].style.display="block"
        //   modals[i].style.opacity="1"
        console.log("click")
        //}

      })
    }

  })

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


function change(boton, vista) {
  boton.addEventListener("click", function () {
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
change(boton1, vista1)
change(boton2, vista2)
change(boton3, vista3)
