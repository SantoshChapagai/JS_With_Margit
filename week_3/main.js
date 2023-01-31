
const calcGasoline = () =>{
    const price = Number( document.getElementById('price').value);
    const money = Number(document.getElementById('money').value);
    const answer = document.querySelector('#answer');
    // const money = +document.querySelector('#money').value);
    let text;
    const amount= Math.floor(money/price);
    if(amount>=10){
        text=`You could get about ${amount} litres, good, now you can escape.`;
    }else{
        text= `You could get about ${amount} litres. Sorry you have to stay:()`;
    }
    
    answer.textContent= text;
};


const tempConverter=(id)=>{
const celInput = document.querySelector('#celcius');
const fahInput = document.querySelector('#fahrenheit');
const kelInput = document.querySelector('#kelvin');




fahInput.value = (celInput.value)*1.8+32;
kelInput.value = +(celInput.value)+273.15;




}