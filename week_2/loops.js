// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
for(let i = 1; i<=100; i+=2){
    console.log(i);
}

// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.
let answer = " ";
let end = 98;
for(let i = 2; i < 100; i += 2){
answer = " " +i+" ";
answer += " " +end+ " ";
end -= 2;
}
console.log(answer);


// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)
let distance, time;


while(distance != 0){

 distance = Number(prompt("Enter the distance in km"));
 if(distance ==0){
    console.log("distance 0 - off the car");
    break;
 }
 time = Number(prompt("enter time in hours"));
 let average = distance / time;
 console.log("average is "+ average); 
}
 
   


// Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
let even = 0;
for(i=0; i<20; i++){
    let userInput = Number(prompt("Enter numbers"));
    if(userInput%2 == 0){
        even++;
    }
}
console.log('There was, ' +even,+ ' even numbers');



// Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.
let num;
let sum = 0;
let count = 0;
while(num != 0){
   num = Number(prompt("Enter any number"));
   if(num == 0){
    console.log("0 input");
    break;
   }
   sum += num;
   count++;

    }
    
    let avrage= sum/count;
    console.log("average is "+avrage);
    




// Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.
let sum1 = 0;
for(let i=0; i<25; i++){
 let input1  = Number(prompt("enter 25 numbers"));
    sum1 += input1;
  
  
    
}
let average2= sum1/25;
console.log('Average is '+average2);


// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.
let firstNumber = Number(prompt("Enter any number"));
let question = confirm("Do you want to continue entering number?");
if(question == true){
  while(i>0)  {
   let newNumber = prompt("Enter number");
   console.log(min(newNumber));
    
  }
  
}else{
    console.log(firstNumber);
}






// Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.
let minimumNumber;
let userWish = Number(prompt("How many numbers do you like to input?"));
for(let i=0; i<userWish; i++){
    let inputNumber = Number(prompt("Enter your numbers"));
     minimumNumber = Math.min(inputNumber);
}
console.log('Minimum number is ' + minimumNumber);
