var a = require("readline-sync");
var num = a.question("enter the num")
i = 1
fac = 0
while(i<num){
    if (num % i === 0){
        fac++
    i++   
    }
}if (num === fac){
    console.log("it is prime num")
}else{
    console.log("it is not prime");
}