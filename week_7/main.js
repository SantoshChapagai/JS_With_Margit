
// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(json => { dataList(json); console.log(json); })
const dataList = (data) => {
  document.querySelector('.data').innerHTML = data.map(item => {
    return `<li>${item.name} - ${item.phone} <a href="mailto:${item.email}"> ${item.email} </a></li > `
  }).join('');
}