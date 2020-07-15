//import { example } from './data.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';
import pokemonFilter from "./data.js";
//const datos = data.results
//console.log(datos)

//------------------VARIABLES---------------------//
let home = document.getElementById("home");
let element = document.getElementById("pokeDex");
let evolutionPoke = document.getElementById("pokeEvol")
//MODALES
let elementModal = document.getElementById("modalPoke");
let elementModalOverlay = document.getElementById("modalPoke-overlay")
let elementModalEvolOverlay = document.getElementById("modalPoke-overlayEvol");
let elementModalPokeEvol = document.getElementById("modalPokeEvol");
//BOTONES
let boton1 = document.getElementById("pokedex");
let boton2 = document.getElementById("evolution");
let boton3 = document.getElementById("bonusMap");
//SECCIONES
let vista1 = document.getElementById("dexter");
let vista2 = document.getElementById("Evolucion");
let vista3 = document.getElementById("Mapa");
//MENU
let alphaOrder = document.getElementById("alphaOrder");



fetch("./data/pokemon/pokemon.json")
  .then((res) => res.json())
  .then((datos) => {
    const datapoke = datos.pokemon;
    console.log("soy yo " + datapoke[1].name);

    //VALUE INPUT
    // let textSearch = document.getElementById("search").value;
    // console.log(textSearch);

    //BUSCAR POKEMON NOMBRE
    const resultado = datapoke.find((pokemon) => pokemon.name == "Charmander");
    console.log(resultado);

    //BUSCAR POKEMON TIPO
    var filtered = datapoke.filter(function (pokemon) {
      return pokemon.type == "Poison";
    });
    console.log(filtered);

    //ORDENAR ALFABETICAMENTE
alphaOrder.addEventListener("change",orderData)
function orderData(){ 
let valueOption = alphaOrder.value
console.log(valueOption)
var filterOrder= pokemonFilter.alphabeticOrder(datapoke,"name", valueOption )
createCardsPokedex(filterOrder)
createCardsPokedex

  }
  console.log(pokemonFilter.alphabeticOrder(datapoke,"name", "pokedex" ))
 createCardsPokedex(datapoke);
 createCardsEvolucion(datapoke.filter(pokemonFilter.checkEvolution))
  })
 
//FUNCION OCULTAR MENU
  window.onload = function(){
    document.querySelector('.boton').addEventListener('click', function(){
      document.querySelector('.container').classList.toggle('invisible');
      this.classList.toggle('mif-chevron-right');
    });
  }

//FUNCION PARA MOSTRAR Y OCULTAR SECCIONES
function change(boton, vista) {
  boton.addEventListener("click", function () {
    vista.style.display = "block";
    home.style.display = "none";

    //Se abre el PopUp
    vista.querySelector(".modal-overlay").classList.add("active"); // Se activa el  modal overlay para el div determinado
    vista.querySelector(".popup").classList.add("active"); // Se activa el PopUp para el div determinado
    vista
      .querySelector(".btn-cerrar-popup")
      .addEventListener("click", function (e) {
        // se agrega la funcionalidad Click para el boton cerrar PopUp
        e.preventDefault();
        vista.querySelector(".modal-overlay").classList.remove("active");
        vista.querySelector(".popup").classList.remove("active");
      });
  });
}
change(boton1, vista1);
change(boton2, vista2);
change(boton3, vista3);

//CREAR CARDS POKEMON
function createCardsPokedex(dataPoke) {
  console.log(dataPoke.length)
  for (let i = 0; i < dataPoke.length; i++) {

    var card = document.createElement("div");
    card.id = dataPoke[i].id;
    card.classList.add("card");
    card.addEventListener(
      "click",
      function () {
        createModal(dataPoke[i]);
      },
      false
    );
    element.appendChild(card);

    var img = document.createElement("img");
    img.setAttribute("src", dataPoke[i].img);
    img.setAttribute("width", "100px");
    card.appendChild(img);

    var tag = document.createElement("h3");
    var text = document.createTextNode(dataPoke[i].name);
    tag.appendChild(text);
    tag.style.textTransform = "uppercase";
    tag.style.fontWeight = "600";
    card.appendChild(tag);

    var divType = document.createElement("div");
    divType.classList.add("pokemonType");
    divType.style.background = typeColorsPokemon(dataPoke[i].type);
    card.appendChild(divType);

    var type = document.createElement("p");
    var textType = document.createTextNode(dataPoke[i].type);
    type.appendChild(textType);
    card.appendChild(type);

  }
}


//CREAR CARDS SECCION EVOLUCION
function createCardsEvolucion(dataPoke) {
  //console.log(dataPoke[i].next_evolution)

  for (let i = 0; i < dataPoke.length; i++) {
    //console.log(dataPoke[i].next_evolution)
    if (dataPoke[i].next_evolution = !dataPoke[i].prev_evolution) {
      var card = document.createElement("div");
      card.id = dataPoke[i].id
      card.classList.add("card");
      card.addEventListener(
        "click",
        function () {
          createModalEvol(dataPoke[i]);
        },
        false

      );

      evolutionPoke.appendChild(card);

      var img = document.createElement("img");
      img.setAttribute("src", dataPoke[i].img);
      img.setAttribute("width", "100px");
      card.appendChild(img);

      var tag = document.createElement("h3");
      var text = document.createTextNode(dataPoke[i].name);
      tag.appendChild(text);
      tag.style.textTransform = "uppercase";
      tag.style.fontWeight = "600";
      card.appendChild(tag);

      var divType = document.createElement("div");
      divType.classList.add("pokemonType");
      divType.style.background = typeColorsPokemon(dataPoke[i].type);
      card.appendChild(divType);

      var type = document.createElement("p");
      var textType = document.createTextNode(dataPoke[i].type);
      type.appendChild(textType);
      card.appendChild(type);
    }
  }
}


//MODALES PARA CADA SECCION
function createModal(pokemon) {
  //------------- TARJETA MODAL PARA CADA POKEMON CUANDO SE SELECCIONA-----------
  elementModalOverlay.classList.add("active")
  var cardInfo = document.createElement("div");
  //cardInfo.setAttribute("width:300px", "height:200px");
  cardInfo.id = "divCardInfo";
  cardInfo.classList.add("cardInfo");
  elementModal.appendChild(cardInfo);

  var divTypeInfo = document.createElement("div");
  divTypeInfo.classList.add("pokemonTypeInfo");
  divTypeInfo.style.background = typeColorsPokemon(pokemon.type);
  cardInfo.appendChild(divTypeInfo);

  var imgInfo = document.createElement("img");
  imgInfo.setAttribute("src", pokemon.img);
  imgInfo.setAttribute("width", "100px");
  cardInfo.appendChild(imgInfo);

  var tagInfo = document.createElement("h3");
  var textInfo = document.createTextNode(pokemon.name);
  tagInfo.appendChild(textInfo);
  tagInfo.style.textTransform = "uppercase";
  tagInfo.style.fontWeight = "600";
  cardInfo.appendChild(tagInfo);

  var typeInfoTitle = document.createElement("p");
  typeInfoTitle.classList.add("tipoTitle");
  var textTypeTitle = document.createTextNode("Tipo");
  typeInfoTitle.appendChild(textTypeTitle);
  cardInfo.appendChild(typeInfoTitle);

  var typeInfo = document.createElement("p");
  var typeInfoText = document.createTextNode(pokemon.type);
  typeInfo.classList.add("type-text");
  typeInfo.appendChild(typeInfoText);
  cardInfo.appendChild(typeInfo);

  var infoTitle = document.createElement("p");
  infoTitle.classList.add("infoTitle");
  var textInfoTitle = document.createTextNode("CARACTERISTICAS");
  infoTitle.appendChild(textInfoTitle);
  cardInfo.appendChild(infoTitle);

  var typeInfoHeight = document.createElement("p");
  typeInfoHeight.classList.add("height-text");
  var textHeight = document.createTextNode("Altura: " + pokemon.height);
  typeInfoHeight.appendChild(textHeight);
  cardInfo.appendChild(typeInfoHeight);

  var typeInfoWeight = document.createElement("p");
  var textWeight = document.createTextNode("Peso: " + pokemon.weight);
  typeInfoWeight.classList.add("weight-text");
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
  var textWeak = document.createTextNode(pokemon.weaknesses);
  weak.appendChild(textWeak);
  weak.classList.add("weaks");
  cardInfo.appendChild(weak);

  var closeModal = document.createElement("a")
  closeModal.classList.add("closeModal-pokemon")
  var closeIcon = document.createTextNode("x")
  closeModal.addEventListener("click", function (e) {
    // se agrega la funcionalidad Click para el boton cerrar PopUp
    e.preventDefault();
    elementModal.removeChild(cardInfo)
    elementModalOverlay.classList.remove("active")

  });
  closeModal.appendChild(closeIcon)
  cardInfo.appendChild(closeModal)
  console.log("Hola " + pokemon);
  console.log(cardInfo);
}
//MODAL EVOLUCION
function createModalEvol(pokemon) {

  elementModalEvolOverlay.classList.add("active")
  var cardInfo = document.createElement("div");
  //cardInfo.setAttribute("width:300px", "height:200px");
  cardInfo.id = "divCardInfoEvol";
  cardInfo.classList.add("cardInfo");
  elementModalPokeEvol.appendChild(cardInfo);

  var divTypeInfo = document.createElement("div");
  divTypeInfo.classList.add("pokemonTypeInfo");
  divTypeInfo.style.background = typeColorsPokemon(pokemon.type);
  cardInfo.appendChild(divTypeInfo);

  var imgInfo = document.createElement("img");
  imgInfo.setAttribute("src", pokemon.img);
  imgInfo.setAttribute("width", "100px");
  cardInfo.appendChild(imgInfo);

  var tagInfo = document.createElement("h3");
  var textInfo = document.createTextNode(pokemon.name);
  tagInfo.appendChild(textInfo);
  tagInfo.style.textTransform = "uppercase";
  tagInfo.style.fontWeight = "600";
  cardInfo.appendChild(tagInfo);

  var tagInfo2 = document.createElement("h3");
  var textInfo2 = document.createTextNode(pokemon.next_evolution.name);
  tagInfo2.appendChild(textInfo2);
  tagInfo2.style.textTransform = "uppercase";
  tagInfo2.style.fontWeight = "600";
  cardInfo.appendChild(tagInfo2);

  var typeInfoTitle = document.createElement("p");
  typeInfoTitle.classList.add("tipoTitle")
  var textTypeTitle = document.createTextNode("Tipo");
  typeInfoTitle.appendChild(textTypeTitle);
  cardInfo.appendChild(typeInfoTitle);

  var infoTitle = document.createElement("p");
  infoTitle.classList.add("infoTitle");
  var textInfoTitle = document.createTextNode("CARACTERISTICAS");
  infoTitle.appendChild(textInfoTitle);
  cardInfo.appendChild(infoTitle);


  var weakTitle = document.createElement("p");
  weakTitle.classList.add("weakTitle");
  var weakInfoTitle = document.createTextNode("DEBILIDADES");
  weakTitle.appendChild(weakInfoTitle);
  cardInfo.appendChild(weakTitle);

  var weakTypeInfo = document.createElement("div");
  weakTypeInfo.classList.add("weakPokemonType");
  cardInfo.appendChild(weakTypeInfo);

  var weak = document.createElement("p");
  var textWeak = document.createTextNode(pokemon.weaknesses);
  weak.appendChild(textWeak);
  weak.classList.add("weaks");
  cardInfo.appendChild(weak);

  var closeModal = document.createElement("a")
  closeModal.classList.add("closeModal-pokemon")
  var closeIcon = document.createTextNode("x")
  closeModal.addEventListener("click", function (e) {
    // se agrega la funcionalidad Click para el boton cerrar PopUp
    e.preventDefault();
    elementModalPokeEvol.removeChild(cardInfo)
    elementModalEvolOverlay.classList.remove("active")

  });
  closeModal.appendChild(closeIcon)
  cardInfo.appendChild(closeModal)
  console.log("Hola " + pokemon);
  console.log(cardInfo);
}

// IDENTIFICADOR DE COLOR POR TIPO PARA CADA POKEMON
function typeColorsPokemon(typePokemon) {
  let arrayColor = [];

  for (let value of typePokemon) {
    //console.log(value)
    switch (value) {
      case "Fire":
        arrayColor.push("#ec8c3e");
        break;

      case "Water":
        arrayColor.push("#46a9ed");
        break;

      case "Poison":
        arrayColor.push("#833fa0");
        break;

      case "Grass":
        arrayColor.push("#75ca55");
        break;

      case "Bug":
        arrayColor.push("#a8b736");
        break;

      case "Normal":
        arrayColor.push("#c2b8a0");
        break;

      case "Psychic":
        arrayColor.push("#f5779e");
        break;

      case "Flying":
        arrayColor.push("#94b7f4");
        break;

      case "Ghost":
        arrayColor.push("#9889cc");
        break;

      case "Electric":
        arrayColor.push("#fad33e");
        break;

      case "Ground":
        arrayColor.push("#c8ab63");
        break;

      case "Fighting":
        arrayColor.push("#9b4840");
        break;

      case "Rock":
        arrayColor.push("#a8865d");
        break;

      case "Ice":
        arrayColor.push("#6ed7e9");
        break;

      case "Dragon":
        arrayColor.push("#3b3aba");
        break;

      default:
        break;
    }
  }
  if (arrayColor.length == 2) {
    return (
      "linear-gradient(to right," + arrayColor[0] + ", " + arrayColor[1] + ")"
    );
    //console.log("TENGO DOS TIPOS")
  }
  return arrayColor[0];

}
