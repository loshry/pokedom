// step 1: Grab data
import pokemonArray from "./data/pokemon.js";
console.log(pokemonArray);

// step 2: obtain pokemon container from html
const container = document.querySelector(".pokemon-container");




// step 3: create html format for pokemon card -- repeatable function
const createPokemonHtmlCard = (pokemon) => {

    const types = pokemon.types.join(" & ")
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    return `
    <div class = "pokemon-card" >
        <img class = "pokemon-card__sprite" src=${pokemon.sprite} alt="pokemon image">
        <h2 class = "pokemon-card__name">${name}</h2>
        <p class = "pokemon-card__types">${name} (#${pokemon.id}) is a ${types} type pokemon.</p>
    
    </div>
    
    `
}

// step 4: render single pokemon on the page
// container.innerHTML = createPokemonHtmlCard(pokemonArray[0]);

// step 5: render multiple pokemon on the page
pokemonArray.forEach((pokemon) => {
    container.innerHTML += createPokemonHtmlCard(pokemon);
});