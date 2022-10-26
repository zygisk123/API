
async function getData() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let data = await response.json();
    return data;
}
getData().then(data => console.log(data));