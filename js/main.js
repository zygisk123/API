var pokeName = document.getElementById("pokeName");
let pokeImg = document.getElementById("img");
let btn = document.getElementById('btnClick');

let randomID;


async function getPokemon() {
    randomID =  Math.floor(Math.random() * 500);
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomID);
    let data = await response.json();
    console.log(data);
    pokeName.innerHTML = data.name;
    pokeImg.src = data.sprites.front_default;

}

getPokemon()
// getData().then(data => pokeName.innerHTML = data.name);

// getData().then(data => pokeImg.src = data.sprites.front_default);

