import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  // public num1: string = '';
  // public num2: string = '';
  // public result: string = '';

  workingNumbers: string = '';
  finalResult: string = '';

  // sum() {
  //   this.result = this.num1 + this.num2;
  // }
  appendNumbers(num: string) {
    this.workingNumbers += num;
    //this.num1 += num;
  }

  deleteNumber() {
    if (this.workingNumbers != '') {
      this.workingNumbers = this.workingNumbers.slice(0, -1);
    }
  }
  clearData() {
    this.workingNumbers = '';
    this.finalResult = '';
  }
  evaluateData() {
    try {
      this.finalResult = eval(this.workingNumbers);
    }
    catch (e) {
      alert('cannot evaluate expression');
    }

  }
  // addition() {
  //   this.result = this.num1 + this.num2;
  // }
  // division() {
  //   this.result = (this.num1) / (this.num2);
  // }
  // subtraction() {
  //   this.result = this.num1 - this.num2;
  // }
  // multiplication() {
  //   this.result = this.num1 * this.num2;
  // }
}
