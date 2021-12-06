function funsum(){
var num1 = Number(document.getElementById("box1").value);
var num2 = Number(document.getElementById("box2").value);
var sum  = num1+num2;
console.log(`the sum of ${num1} and ${num2} is ${sum}`)
document.getElementById("box3").value =sum;
}

function funMultiplication(){
let num3 = Number(document.getElementById("box4").value);
let num4 = Number(document.getElementById("box5").value);
let multiply  = (num3)*(num4);
console.log(`the multiplication of ${num3} and ${num4} is ${multiply}`);
document.getElementById("box6").value =multiply;
}