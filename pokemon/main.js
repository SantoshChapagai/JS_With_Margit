
// fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
//   .then(response => response.json())
//   .then(json => { nameList(json.results); console.log(json.results); })


// const nameList = (data) => {
//   document.querySelector('.data').innerHTML = data.map((item, i) => {
//     return `<li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg"/>   ${item.name}</li > `;

//   }).join('');
// }
// fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
//   .then(response => response.json())
//   .then(json => {
//     const fetches = json.results.map(item => {
//       return fetch(item.url).then(res => res.json())
//     })
//     Promise.all(fetches).then(res => dataList(res))
//   });


// const dataList = (data) => {
//   document.querySelector('.card').innerHTML = data.map((item) => {
//     return `<li><img src="${item.sprites.other.dream_world.front_default}"/> <h2>${item.name}</h2></li> `;

//   }).join('');
// }
const generations = [
  { limit: 151, offset: 0 },
  { limit: 100, offset: 151 },
  { limit: 135, offset: 251 },
  { limit: 107, offset: 386 },
  { limit: 156, offset: 493 },
  { limit: 72, offset: 649 },
  { limit: 88, offset: 721 },
  { limit: 96, offset: 809 },
  { limit: 110, offset: 905 },
];
const button = document.querySelectorAll('.generation');
button.forEach((button, i) => {
  button.addEventListener('click', () => fetchData(generations[i], i));
});
limit = generations.limit;
offset = generations.offset;
fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(response => response.json())
  .then((data) => {
    const fetches = data.results.map(data => {
      return fetch(data.url).then(res => res.json())
    })
    Promise.all(fetches).then(res => dataList(res))
  });
const clickButton = (i) => {
  if (i == 0) {
    console.log(dataList());
    // return generations[0].dataList();
  } else if (i == 1) {
    console.log('what');
  }

}

const dataList = (data) => {

  document.querySelector('.card').innerHTML = data.map((item) => {
    return `<li><img src="${item.sprites.other.dream_world.front_default}"/> <h2>${item.name}</h2> <h3>${item.types.map(type => type.type.name)}</h3> <h3>${item.id}</h3> </li> `;

  }).join('');

}











