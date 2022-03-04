
function calculate (){

let num1 = Number(document.getElementById('num1').value);
let num2 = Number(document.getElementById('num2').value);
let result = new Calculator (num1, num2);
alert (result);
}


class Calculator {
    constructor(num1, num2,) {
        this.num1 = num1;
        this.num2 = num2;
        
    }
  
    static sum() {
    result = this.num1 + this.num2;
    }
    static sub() {
result = this.num1 - this.num2;
    }
    static mult() {
        result =  this.num1 * this.num2;
    }
    static div() {
        result =  this.num1 / this.num2;
    }
}










