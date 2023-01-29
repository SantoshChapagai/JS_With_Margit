function salaryCal(){


let hours = prompt("Enter your working hours");
let rate = prompt("Enter your rate per hour");
let salary = hours * rate;

if (hours <=7){
    totalSalary = salary;
    alert("The total pay is " + totalSalary);
}else if (hours <= 9) {
    bonus = (hours-7)* rate* 1/2;
    totalSalary = salary + bonus;
    alert("The total pay is "+totalSalary);

} else {
    bonus = (2*rate*1/2) + (hours-9)*rate*1;
    totalSalary = salary + bonus;
    alert("The total pay is "+ totalSalary);
}
}
salaryCal();

    