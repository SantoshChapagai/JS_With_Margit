const form = document.querySelector('form');
const licence = document.querySelector('#licence');
const maker = document.querySelector('#maker');
const model = document.querySelector('#model');
const owner = document.querySelector('#owner');
const price = document.querySelector('#price');
const colour = document.querySelector('#colour');
const submitCar = document.querySelector('#btn_submit');
const table = document.querySelector('#table');
// search part
const searchInput = document.querySelector('#search');
const searchCar = document.querySelector('#btn_search');
const answer = document.querySelector('#answer');

const allCars = [];

const newStoredCars = JSON.parse(window.localStorage.getItem('users'));

newStoredCars.forEach(item => {
  addTable(...item);
});

const addCars = (event) => {
  event.preventDefault()
  let cars = {
    licenceNumber: licence.value,
    makerName: maker.value,
    modelName: model.value,
    ownerName: owner.value,
    priceNumber: price.value,
    colourName: colour.value,
  };
  addTable(cars);
  allCars.push(cars);
  let storedCars = JSON.parse(window.localStorage.getItem('users'));
  if (!storedCars) {
    storedCars = [];
  }
  storedCars.push(allCars);
  window.localStorage.setItem('users', JSON.stringify(storedCars));
  form.reset();
}


function addTable(newStoredCars) {
  const newTableRow = document.createElement('tr');
  newTableRow.innerHTML =
    `<td>${newStoredCars.licenceNumber}</td>
  <td>${newStoredCars.makerName}</td>
  <td>${newStoredCars.modelName}</td>
  <td>${newStoredCars.ownerName}</td>
  <td>${newStoredCars.priceNumber}</td>
  <td>${newStoredCars.colourName}</td>
  `;
  table.appendChild(newTableRow);
}

// search section
const userSearch = () => {
  let record = window.localStorage.getItem('users');
  let userRecord = record[0].licenceNumber;
  let findCar = searchInput.value;
  if (findCar === userRecord) {
    answer.textContent = `The car with licence number ${findCar} is found in our database.`;
  } else {
    answer.textContent = `The licence number ${findCar} does not match our database, please try again.`;
  }
}
submitCar.addEventListener('click', addCars);
searchCar.addEventListener('click', userSearch);