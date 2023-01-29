function randomNumbers(){
    let a = Number(prompt("Enter the first number"));
    let b = Number(prompt("Enter the second number"));
    let c = Number(prompt("Enter the third number"));
    if(a>=0|| b>=0 || c>=0){
        return (a+b+c);
    }; 
    if(a>=0 && b>=0 && c>=0){
        return(a*b*c);
    }else if(a<0 && b<0 && c<0){
        return("only negatives");
    }
}
randomNumbers(); 