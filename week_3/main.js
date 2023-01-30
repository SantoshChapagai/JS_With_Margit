
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


