import pokemonFilter from "./data.js";

// RECORDAR ORDENAR EL CODIGO Y RENOMBRAR LAS VARIABLES
//FORMATEAR SIEMPRE EL DOCUMENT 
//TODAS EN INGLES Y CON CAMEL CASE
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
let restartButton = document.getElementById("restart-button");
let evolInitial = document.getElementById("evolPoke")
let graphicsButton = document.getElementById("stadistics")

//SECCIONES
let vista1 = document.getElementById("dexter");
let vista2 = document.getElementById("Evolucion");
let vista3 = document.getElementById("Mapa");
let evolutionCard = document.getElementById("evolPrincipal");
let stadistics = document.getElementById("Estadisticas");

//MENU LISTENER
//FILTRO POR ORDEN ALFABETICO
let alphaOrder = document.getElementById("alphaOrder");
alphaOrder.addEventListener("change", orderData)
//FILTRO POR TIPO
let typePokemonFilter = document.getElementById("pokemonType");
typePokemonFilter.addEventListener("change", filterType)
//BARRA DE BUSQUEDA
let bot = document.getElementById("prueba");
let searchBar = document.getElementById("search")
//FILTRO POR DEBILIDAD
let weaknessPokemonFilter = document.getElementById("pokemonWeak");
weaknessPokemonFilter.addEventListener("change", filterWeakness)
//FILTRO POR NOMBRE
bot.addEventListener("click", filterName)
//LISTENER
restartButton.addEventListener("click", restartFilter)

//VARIABLES SCOPE GLOBAL PARA PODER USAR LA DATA FUERA DEL FETCH
let datapoke;
let datapokeClone = [];



fetch("./data/pokemon/pokemon.json")
  .then((res) => res.json())
  .then((datos) => {

    datapoke = datos.pokemon;
    datapokeClone = datapoke.slice();
    //console.log(pokemonFilter.filterByType(datapoke, "Dragon"))
    createCardsPokedex(datapoke);
    createCardsEvolucion(datapoke.filter(pokemonFilter.checkEvolution))

  }).catch((error) => {
    //console.log("loading.......151 pokemon");
    return error
  });

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

//FUNCION MENU EVOLUCION

function hideSection(button, view1, view2) {
  button.addEventListener("click", function () {
    view1.style.display = "block";
    view2.style.display = "none";
  })
}
hideSection(graphicsButton, stadistics, evolutionCard);
hideSection(evolInitial, evolutionCard, stadistics);

//FUNCION OCULTAR MENU POKEDEX
window.onload = function () {
  document.querySelector('.boton').addEventListener('click', function () {
    document.querySelector('.container').classList.toggle('invisible');
    this.classList.toggle('mif-chevron-right');
  });
}

//FUNCIONES FILTRADO POKEDEX

//RESTABLECER FILTROS 
function restartFilter() {
  //console.log("RESTART")
  datapoke = datapokeClone.slice();
  //se restablece el orden la original asignandole al value el valor de pokedex
  alphaOrder.value = "pokedex";
  orderData()
  let cardArray = element.childNodes;
  for (let card of cardArray) {
    card.style.display = "block";
  }

}
//ORDENAR ALFABETICAMENTE
function orderData() {
  //variable que almacena el value del option del selecte
  let valueOption = alphaOrder.value
  //console.log(valueOption)
  //variable que tiene los nodos hijos(todas la tarjetas) del elemento contenedor
  let cardArray = element.childNodes;
  //variable que contiene la data como un clon para no afectar la data principal
  let filterOrder = datapoke.slice();
  //condicion para ejecutar el filtro
  if (valueOption != "pokedex") {
    filterOrder = pokemonFilter.alphabeticOrder(filterOrder, "name", valueOption)
  }
  //los dos ciclos sirven para buscar el match entre la lista existente y la nueva lista que se crea con el filtro
  //ciclo para los atributos pokemon(Id de cada pokemon) de la nueva lista creada en filterOrder
  for (let pokemonAttribute of filterOrder) {
    // ciclo para buscar las cartas en el array de cartas 
    for (let card of cardArray) {
      // condicion que especifica que si el id de la lista original coincide con la nueva lista
      if (pokemonAttribute.id == card.id) {
        //con el metodo appendChild como los nodos ya estan creados lo que hace  es ordenarlos y ponerlos 
        //en la nueva posicion de acuerdo a los parametros antes dados
        element.appendChild(card);
      }
    }
  }


}
//BUSCAR POR NOMBRE
function filterName() {
  //aca como en el video se transforma en minuscula el input para que coincida con la data 
  let findName = searchBar.value.toLowerCase();
  let filterName = datapoke;
  filterName = pokemonFilter.filterByName(filterName, findName)
  let cardArray = element.childNodes;
  for (let card of cardArray) {
    card.style.display = "none";
    filterName.find((pokemon) => {
      if (pokemon.id == card.id) {
        card.style.display = "block";
      }
    });
  }
}
// //BUSCAR POKEMON TIPO    
function filterType() {
  let valueTypeOption = typePokemonFilter.value
  //console.log(valueTypeOption)
  let cardArray = element.childNodes;
  let filterOrder = datapoke;
  // console.log(filterOrder)
  filterOrder = pokemonFilter.filterByType(filterOrder, valueTypeOption)
  for (let card of cardArray) {
    card.style.display = "none";
    filterOrder.find((pokemon) => {
      if (pokemon.id == card.id) {
        card.style.display = "block";
      }
    });
  }

}
//BUSCAR POKEMON DEBILIDAD    
function filterWeakness() {
  let valueWeakOption = weaknessPokemonFilter.value
  //console.log(valueWeakOption)
  let cardArray = element.childNodes;

  let filterOrder = datapoke;
  //console.log(filterOrder)
  filterOrder = pokemonFilter.filterByWeakness(filterOrder, valueWeakOption)
  //console.log(filterOrder)
  for (let card of cardArray) {
    card.style.display = "none";
    filterOrder.find((pokemon) => {
      if (pokemon.id == card.id) {
        card.style.display = "block";
      }
    });
  }

}


//FUNCIONES PARA CREAR TARJETAS Y MODALES DE LOS POKEMON

//CREAR CARDS POKEMON
function createCardsPokedex(dataPoke) {
  //console.log(dataPoke.length)
  for (let i = 0; i < dataPoke.length; i++) {
    //console.log(dataPoke[i].type)

    let card = document.createElement("div");
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

    let img = document.createElement("img");
    img.setAttribute("src", dataPoke[i].img);
    img.setAttribute("width", "100px");
    card.appendChild(img);

    let tag = document.createElement("h3");
    let text = document.createTextNode(dataPoke[i].name);
    tag.appendChild(text);
    tag.style.textTransform = "uppercase";
    tag.style.fontWeight = "600";
    card.appendChild(tag);

    let divType = document.createElement("div");
    divType.classList.add("pokemonType");
    divType.style.background = typeColorsPokemon(dataPoke[i].type);
    card.appendChild(divType);

    let type = document.createElement("p");
    let textType = document.createTextNode(dataPoke[i].type);
    type.appendChild(textType);
    card.appendChild(type);

  }
}
//MODALES PARA CADA SECCION
function createModal(pokemon) {

  elementModalOverlay.classList.add("active")
  let cardInfo = document.createElement("div");
  //cardInfo.setAttribute("width:300px", "height:200px");
  cardInfo.id = "divCardInfo";
  cardInfo.classList.add("cardInfo");
  elementModal.appendChild(cardInfo);

  let divTypeInfo = document.createElement("div");
  divTypeInfo.classList.add("pokemonTypeInfo");
  divTypeInfo.style.background = typeColorsPokemon(pokemon.type);
  cardInfo.appendChild(divTypeInfo);

  let imgInfo = document.createElement("img");
  imgInfo.setAttribute("src", pokemon.img);
  imgInfo.setAttribute("width", "100px");
  cardInfo.appendChild(imgInfo);

  let tagInfo = document.createElement("h3");
  let textInfo = document.createTextNode(pokemon.name);
  tagInfo.appendChild(textInfo);
  tagInfo.style.textTransform = "uppercase";
  tagInfo.style.fontWeight = "600";
  cardInfo.appendChild(tagInfo);

  let typeInfoTitle = document.createElement("p");
  typeInfoTitle.classList.add("tipoTitle");
  let textTypeTitle = document.createTextNode("Tipo");
  typeInfoTitle.appendChild(textTypeTitle);
  cardInfo.appendChild(typeInfoTitle);

  let typeInfo = document.createElement("p");
  let typeInfoText = document.createTextNode(pokemon.type);
  typeInfo.classList.add("type-text");
  typeInfo.appendChild(typeInfoText);
  cardInfo.appendChild(typeInfo);

  let infoTitle = document.createElement("p");
  infoTitle.classList.add("infoTitle");
  let textInfoTitle = document.createTextNode("CARACTERISTICAS");
  infoTitle.appendChild(textInfoTitle);
  cardInfo.appendChild(infoTitle);

  let typeInfoHeight = document.createElement("p");
  typeInfoHeight.classList.add("height-text");
  let textHeight = document.createTextNode("Altura: " + pokemon.height);
  typeInfoHeight.appendChild(textHeight);
  cardInfo.appendChild(typeInfoHeight);

  let typeInfoWeight = document.createElement("p");
  let textWeight = document.createTextNode("Peso: " + pokemon.weight);
  typeInfoWeight.classList.add("weight-text");
  typeInfoWeight.appendChild(textWeight);
  cardInfo.appendChild(typeInfoWeight);

  let weakTitle = document.createElement("p");
  weakTitle.classList.add("weakTitle");
  let weakInfoTitle = document.createTextNode("DEBILIDADES");
  weakTitle.appendChild(weakInfoTitle);
  cardInfo.appendChild(weakTitle);

  let weakTypeInfo = document.createElement("div");
  weakTypeInfo.classList.add("weakPokemonType");
  cardInfo.appendChild(weakTypeInfo);

  let weak = document.createElement("p");
  let textWeak = document.createTextNode(pokemon.weaknesses);
  weak.appendChild(textWeak);
  weak.classList.add("weaks");
  cardInfo.appendChild(weak);

  let closeModal = document.createElement("a")
  closeModal.classList.add("closeModal-pokemon")
  let closeIcon = document.createTextNode("x")
  closeModal.addEventListener("click", function (e) {
    // se agrega la funcionalidad Click para el boton cerrar PopUp
    e.preventDefault();
    elementModal.removeChild(cardInfo)
    elementModalOverlay.classList.remove("active")

  });
  closeModal.appendChild(closeIcon)
  cardInfo.appendChild(closeModal)
  //console.log("Hola " + pokemon);
  //console.log(cardInfo);
}

//CREAR CARDS SECCION EVOLUCION
function createCardsEvolucion(dataPoke) {
  //  const find = datos.find((pokemon)=>pokemon.name === dataPoke.next_evolution.name)
  //   console.log(find)


  for (let i = 0; i < dataPoke.length; i++) {

    if (!dataPoke[i].prev_evolution) {
      //console.log(dataPoke[i].next_evolution)

      let card = document.createElement("div");
      card.id = dataPoke[i].id
      //console.log(card.id - 1)
      card.classList.add("card");
      card.addEventListener(
        "click",
        function () {
          createModalEvol((dataPoke[i].next_evolution));
        },
        false

      );
      evolutionPoke.appendChild(card);

      let img = document.createElement("img");
      img.setAttribute("src", dataPoke[i].img);
      img.setAttribute("width", "100px");
      card.appendChild(img);

      let tag = document.createElement("h3");
      let text = document.createTextNode(dataPoke[i].name);
      tag.appendChild(text);
      tag.style.textTransform = "uppercase";
      tag.style.fontWeight = "600";
      card.appendChild(tag);

      let divType = document.createElement("div");
      divType.classList.add("pokemonType");
      divType.style.background = typeColorsPokemon(dataPoke[i].type);
      card.appendChild(divType);

      let type = document.createElement("p");
      let textType = document.createTextNode(dataPoke[i].type);
      type.appendChild(textType);
      card.appendChild(type);
    }
  }
}


//MODAL EVOLUCION
function createModalEvol(pokemon) {


  elementModalEvolOverlay.classList.add("active")

  let cardInfo = document.createElement("div");
  cardInfo.id = "divCardInfoEvol";
  cardInfo.classList.add("cardInfo");
  elementModalPokeEvol.appendChild(cardInfo);

  let cardImg = document.createElement("div");
  cardImg.classList.add("cardImg");
  cardInfo.appendChild(cardImg);

  let cardEvolInfo = document.createElement("div");
  cardEvolInfo.id = "cardEvolName"
  cardEvolInfo.classList.add("cardEvolInfo");
  cardInfo.appendChild(cardEvolInfo);

  let cardEvolType = document.createElement("div");
  cardEvolType.classList.add("cardEvolInfo");
  cardInfo.appendChild(cardEvolType);

  let cardColorType = document.createElement("div");
  cardColorType.classList.add("cardEvolInfo");
  cardInfo.appendChild(cardColorType);

  let cardEvolCandy = document.createElement("div");
  cardEvolCandy.classList.add("cardEvolInfo");
  cardInfo.appendChild(cardEvolCandy);

  let cardEvolCount = document.createElement("div");
  cardEvolCount.classList.add("cardEvolInfo");
  cardInfo.appendChild(cardEvolCount);

  let cardEvolChance = document.createElement("div");
  cardEvolChance.classList.add("cardEvolInfo");
  cardInfo.appendChild(cardEvolChance);

  let cardEvolTime = document.createElement("div");
  cardEvolTime.classList.add("cardEvolInfo");
  cardInfo.appendChild(cardEvolTime);

  pokemon.map(element => {

    const poke = datapoke.find((pokemon) => {
      return pokemon.name === element.name
    })

    let imgInfo = document.createElement("img");
    imgInfo.setAttribute("src", poke.img);
    imgInfo.classList.add("imgEvol")
    cardImg.appendChild(imgInfo);

    let tagInfo = document.createElement("h3");
    let textInfo = document.createTextNode(poke.name);
    tagInfo.appendChild(textInfo);
    tagInfo.style.textTransform = "uppercase";
    tagInfo.style.fontWeight = "600";
    cardEvolInfo.appendChild(tagInfo);

    let typeInfoEvol = document.createElement("p");
    typeInfoEvol.classList.add("type")
    let textTypeEvol = document.createTextNode(poke.type);
    typeInfoEvol.appendChild(textTypeEvol);
    cardEvolType.appendChild(typeInfoEvol);

    let divTypeInfo = document.createElement("div");
    divTypeInfo.classList.add("pokemonTypeInfoEvol");
    divTypeInfo.style.background = typeColorsPokemon(poke.type);
    cardColorType.appendChild(divTypeInfo);

    let candyName = document.createElement("p");
    let textCandyName = document.createTextNode("candy: " + poke.candy);
    candyName.appendChild(textCandyName);
    candyName.classList.add("candyName");
    cardEvolCandy.appendChild(candyName);

    let candy = document.createElement("p");
    let textCandy = document.createTextNode("candy count: " + poke.candy_count);
    candy.appendChild(textCandy);
    candy.classList.add("candy");
    cardEvolCount.appendChild(candy);

    let chance = document.createElement("p");
    let textChance = document.createTextNode("spawn chance: " + poke.spawn_chance);
    chance.appendChild(textChance);
    chance.classList.add("chance");
    cardEvolChance.appendChild(chance);

    let time = document.createElement("p");
    let textTime = document.createTextNode("spawn time: " + poke.spawn_time);
    time.appendChild(textTime);
    time.classList.add("chance");
    cardEvolTime.appendChild(time);

  })

  let closeModal = document.createElement("a")
  closeModal.classList.add("closeModal-pokemon")
  let closeIcon = document.createTextNode("x")
  closeModal.addEventListener("click", function (e) {
    // se agrega la funcionalidad Click para el boton cerrar PopUp
    e.preventDefault();
    elementModalPokeEvol.removeChild(cardInfo)
    elementModalEvolOverlay.classList.remove("active")

  });
  closeModal.appendChild(closeIcon)
  cardInfo.appendChild(closeModal)
  // console.log("Hola " + pokemon);
  // console.log(cardInfo);
  ;
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




// let LastId = null;

// document.querySelectorAll('area')
//   .forEach((area) => {
//     area.addEventListener("mouseenter", function( event ) {  
      
//       if(area.id!=LastId){
//         LastId= area.id;
//         const element = document.getElementById('image');
//         element.src= area.getAttribute("data-image");
//         element.style.display = "block";
//         element.style.left = event.pageX-50+'px';
//         element.style.top = event.pageY-70+'px';  
//         //console.log("mouseover") 
//       }
       
//     }, false);
//     area.addEventListener("mouseleave", function( event ) {
//       LastId=null;
//       //console.log("mouseout")
//       document.getElementById('image').style.display = "none"
//     }, false);

//     //console.log(area.id);
//   });

// // document.getElementById("area2").addEventListener("mouseover", function( event ) {   
// //   // highlight the mouseover target
// //   const element = document.getElementById('image');
// //   element.src= document.getElementById("area2").getAttribute("data-image");
// //   element.style.display = "block";
// //   element.style.left = event.pageX+3+'px';
// //   element.style.top = event.pageY+3+'px';
// //   console.log(element)
// //   // reset the color after a short delay
  
// // }, false);

// // document.getElementById("area2").addEventListener("mouseout", function( event ) {   
// //   // highlight the mouseover target
// //   const element = document.getElementById('image')
  
// //   element.style.display = "none";
  
// //   // reset the color after a short delay
  
// // }, false);



// // $("area").mousemove(function(e) {
// //   $("#image").attr("src", $(this).data("image")).show().css({
// //       left: e.pageX + 10,
// //       top: e.pageY + 10
// //   });
// // });
// // $("area").mouseout(function(e) {
// //   $("#image").hide();
// // });


// // function createAreaMap(){
// //   let mapa = document.getElementById('mapa');
// //   let js = document.createElement('area');
// //     // Aquí defines el tipo de forma
// //     js.shape = 'poly';
// //     js.coords = '130,147,200,107,130,4,59,107';
// //     js.href = 'https://developer.mozilla.org/docs/Web/JavaScript';
// //     js.target = '_blank';
// //     // Agregar área al mapa
// //     mapa.appendChild(js);
// // }