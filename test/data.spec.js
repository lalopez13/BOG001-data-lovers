import pokemonFilter from '../src/data.js';
import data from '../src/data/pokemon/pokemon.json';


describe('pokemonFilter', () => {

  it('deberia ser un objeto ', () => {
    expect(typeof pokemonFilter).toBe('object');
  })

  //ORDEN ALFABETICO
  describe('pokemonFilter.alphabeticOrder', () => {
    it('debería ser una función', () => {
      expect(typeof pokemonFilter.alphabeticOrder).toBe('function');
    })
  })

  it('deberia retornar Abra para pokemon ordenados de forma ascendente', () => {
    expect(pokemonFilter.alphabeticOrder(data.pokemon, "name", "a-z")[0].name).toBe('Abra');
  })
  it('deberia retornar Weezing para pokemon ordenados de forma descendente', () => {
    expect(pokemonFilter.alphabeticOrder(data.pokemon, "name", "z-a")[3].name).toBe('Weezing');
  })

  //FILTRO POR TIPO
  it('debería ser una función', () => {
    expect(typeof pokemonFilter.filterByType).toBe('function');
  })
  it('deberia retornar pokemon tipo Psychic', () => {
    const pokemonType = [{
      type: ['Psychic']
    }, {
      type: ['Water', 'Poison']
    }];
    const pokemonExpect = [{
      type: ['Psychic']
    }];
    expect(pokemonFilter.filterByType(pokemonType, "Psychic")).toEqual(pokemonExpect);
  });
  it('deberia retornar pokemon tipo Electric', () => {
    const pokemonType = [{
      name: 'Jolteon',
      type: ['Electric']
    }, {
      name: 'Moltres',
      type: ['Fire', 'Flying']
    }];
    const pokemonExpect = [{
      name: 'Jolteon',
      type: ['Electric']
    }];
    expect(pokemonFilter.filterByType(pokemonType, "Electric")).toEqual(pokemonExpect);
  });
  //FILTRO POR DEBILIDAD
  it('debería ser una función', () => {
    expect(typeof pokemonFilter.filterByWeakness).toBe('function');
  })
  it('deberia retornar 3 pokemones para debilidad "Dragon"', () => {
    expect(pokemonFilter.filterByWeakness(data.pokemon, "Dragon")).toHaveLength(3);
  });
  //FILTRO POR NOMBRE
  describe('pokemonFilter.filterByName', () => {
    it('debería ser una función', () => {
      expect(typeof pokemonFilter.filterByName).toBe('function');
    })
  })
  it('debería buscar el pokemon por su nombre ', () => {
    const pokemonNames = [{
      name: 'Porygon'
    }, {
      name: 'Omanyte'
    }, ];
    const outputName = [{
      name: 'Omanyte'
    }];
    expect(pokemonFilter.filterByName(pokemonNames, 'oman')).toEqual(outputName);
  })


  //ESTADISTICAS
  //TIPO
  describe('pokemonFilter.percentageByPokemonType', () => {
    it('debería ser una función', () => {
      expect(typeof pokemonFilter.percentageByPokemonType).toBe('function');
    })
  })
  it('debería retornar porcentaje de los pokemon tipo Ghost', () => {
    expect(pokemonFilter.percentageByPokemonType(data.pokemon, 'Ghost')).toEqual("1.99");
  })
  //DEBILIDAD
  describe('pokemonFilter.percentageByWeakness', () => {
    it('debería ser una función', () => {
      expect(typeof pokemonFilter.percentageByPokemonWeakness).toBe('function');
    })
  })
  it('debería retornar el porcentaje de los pokemon con debilidad Fairy', () => {
    expect(pokemonFilter.percentageByPokemonWeakness(data.pokemon, 'Fairy')).toEqual("7.28");
  })
  //PROMEDIO
  describe('pokemonFilter.averagePokemon', () => {
    it('debería ser una función', () => {
      expect(typeof pokemonFilter.averagePokemon).toBe('function');
    })
  })
  it('debería retornar el promedio de peso de los  pokemon ', () => {
    expect(pokemonFilter.averagePokemon(data.pokemon, 'weight')).toEqual("45.95kg");
  })
  it('debería retornar el promedio de altura de los  pokemon ', () => {
    expect(pokemonFilter.averagePokemon(data.pokemon, 'height')).toEqual("1.19m");
  })
  it('debería retornar el promedio de spawnChance de los  pokemon ', () => {
    expect(pokemonFilter.averagePokemon(data.pokemon, 'spawnChance')).toEqual(0.73);
  })

  //FUNCIONES EVOLUCION

  describe('pokemonFilter.checkEvolution', () => {
    it('debería ser una función', () => {
      expect(typeof pokemonFilter.checkEvolution).toBe('function');
    })
  })
  it('deberia filtrar los pokemones que tienen evolucion ', () => {
    expect(data.pokemon.filter(pokemonFilter.checkEvolution)).toHaveLength(126);
  })


})
