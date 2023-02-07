
const form = document.querySelector('form');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');

const backgroundChange= () => {

    document.body.style.backgroundImage = `linear-gradient(${color1.value}, ${color2.value})`;
}
// () this run the function instantly.
form.addEventListener('change', backgroundChange);


