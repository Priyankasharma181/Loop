var  readline = require("readline-sync");
var num = readline.question('enter the num')
var fac = 1
i = 0
while (i < num){
    if (num%i === 0){
        fac++
    }
    i++
}

if (fac === 2){
    console.log("prime num")
}else{
    console.log("it is not prime num");
}