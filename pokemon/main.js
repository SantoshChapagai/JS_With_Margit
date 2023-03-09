
// fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
//   .then(response => response.json())
//   .then(json => { nameList(json.results); console.log(json.results); })


// const nameList = (data) => {
//   document.querySelector('.data').innerHTML = data.map((item, i) => {
//     return `<li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg"/>   ${item.name}</li > `;

//   }).join('');
// }
fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
  .then(response => response.json())
  .then(json => {
    const fetches = json.results.map(item => {
      return fetch(item.url).then(res => res.json())
    })
    Promise.all(fetches).then(res => dataList(res))
  });


const dataList = (data) => {
  document.querySelector('.card').innerHTML = data.map((item) => {
    return `<li><img src="${item.sprites.other.dream_world.front_default}"/> <h2>${item.name}</h2></li> `;

  }).join('');
}

