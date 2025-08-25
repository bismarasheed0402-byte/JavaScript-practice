/*
create faulty calculator
if <0.1..sum=> sub
sub=>div, mul=> sum, sub=> div, div=> expo..
*/


function sum(a,b)
{
    return a+b;
    console.log("return");
}

function sub (a,b){
    return a-b;
    console.log("return");
}

function div(a,b) {
    return a/b;
    console.log("return");
}

function mul(a,b){
    return a*b;
    console.log("return");
}
function expo(a,b){
    return a**b;
    console.log("return");
}

let random= Math.random()
console.log(random)

let a= prompt("enter ist no")
let c= prompt("enter operation")
let b= prompt("enter second no")

let obj= {
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+",
}

if(Math.random()>0.1) {
    
    console.log(`the result is ${a} ${c} ${b}}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    
c= obj[c]
alert('the result is ${eval(`${a} ${c} ${b}`)}')
}