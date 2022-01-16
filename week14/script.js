let result= 0 

function plus () {

    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result = num1 + num2;
    
}


function minus () {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result = num1 - num2;
    
}
function times ()   {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result = num1 * num2;
    
}
function divide () {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    result = num1 / num2;
}

function calculate () {
    alert (result);
}