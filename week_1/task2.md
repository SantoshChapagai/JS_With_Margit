// Guess what answers you would get if you ran this in the Javascript Console.
// Once you have an answer to the questions then check them by copying them and running it in the console yourself line by line

//Evaluate the below:
3 + 65 // 68
3 + "65"//365
7 - "3"//4
15 % 5//0
5 % 15//5
"Java" + "Script"//JavaScript
"Java" - "Script"//nan
" " + " "//’’
" " + 0//’0’
true + true//2
true + false//1
false + true//1
false – true//-1
3 – 4//-1

//Evaluate the below comparisons:
4 >= 2//true
6 === 2//false
3 <= 1//false
1 != 1//false
"A" > "B"//false
"B" < "C"//true
"a" > "A"//true
"b" < "A"//false
true === false//false
true != true//false

// Display the string:
// "Go To Helsinki Business College," they said. "It'll Will Be "Fun"," they said.

// Guess what answers you would get if you ran this in the Javascript Console.
// Once you have an answer to the questions then check them by copying them and running it in the console yourself line by line

//Evaluate the below:
3 + 65 // 68
3 + "65"//365
7 - "3"//4
15 % 5//0
5 % 15//5
"Java" + "Script"//JavaScript
"Java" - "Script"//nan
" " + " "//’’
" " + 0//’0’
true + true//2
true + false//1
false + true//1
false – true//-1
3 – 4//-1

//Evaluate the below comparisons:
4 >= 2//true
6 === 2//false
3 <= 1//false
1 != 1//false
"A" > "B"//false
"B" < "C"//true
"a" > "A"//true
"b" < "A"//false
true === false//false
true != true//false

// Display the string:
// "Go To Helsinki Business College," they said. "It'll Will Be "Fun"," they said.

function total_salary(){
let hours = prompt("Enter your hours");
let rate = prompt("Enter hourly rate");
if (hours <= 7) {
    normalPay = (hours * rate)
    overTime = 0
    salary = normalPay + overTime
    alert ("Your total pay is " + salary);
}else if (hours<=9){
    normalPay = hours * rate
    overTime = ((hours-7)*rate*50%)
    salary = (normalPay + overTime)
    alert ("Your total pay is " + salary);
}else{
    normalPay = (hours * rate)
    overTime1 = (2*rate*50%)
    overTime2 = ((hours-9)*rate*100%)
    salary = (normalPay+overTime1+overTime2)
    alert("Your total pay is " + salary);
 
}
}

function total_salary(){
let hours = prompt("Enter your hours");
let rate = prompt("Enter hourly rate");
if (hours <= 7) {
    normalPay = hours * rate;
    overtime = 0;
    salary = normalPay + overtime;
    alert ("Your total pay is " + salary);
}else{
    alert("nothing");
}
}