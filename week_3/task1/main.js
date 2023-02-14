
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

// convert temperature

const tempConverter=(id, value)=>{

    const val = parseFloat(value);

const celInput = document.querySelector('#celcius');
const fahInput = document.querySelector('#fahrenheit');
const kelInput = document.querySelector('#kelvin');

if(id==='celcius'){
    fahInput.value = (val * 1.8+32).toFixed(2);
   kelInput.value = (val + 273.15).toFixed(2);     
}

if(id==='fahrenheit'){
celInput.value= ((val-32)/1.8).toFixed(2);
kelInput.value= ((val-32)/1.8 + 273.15).toFixed(2);
}
if(id==='kelvin'){
    celInput.value= (val-273.15).toFixed(2);
    fahInput.value= ((val-273.15)*9/5+32).toFixed(2);
}
// toFixed helps to fix how many numbers to put after decimals.





}





// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs)