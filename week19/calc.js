

let num1 = Number(document.getElementById('num1').value);
let num2 = Number(document.getElementById('num2').value);
let numbers = new Calculator(num1,num2);

class Calculator {
  constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
  }

  static sum(numbers) {
  return (numbers.num1 + numbers.num2);
  }
  static sub(numbers) {
      return numbers.num1 - numbers.num2;
  }
  static mult(numbers) {
      return numbers.num1 * numbers.num2;
  }
  static div(numbers) {
      return numbers.num1 / numbers.num2;
  }
}
