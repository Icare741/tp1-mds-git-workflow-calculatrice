import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue: string = '';
  previousOperation: string = '';

  addNumber(num: number) {
    this.displayValue += num.toString();
  }

  addOperator(operator: string) {
    this.displayValue += operator;
  }

  calculate() {
    try {
      const result = eval(this.displayValue).toString();
      this.previousOperation = this.displayValue;
      this.displayValue = result;
    
      
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clear() {
    this.displayValue = '';
    this.previousOperation = '';
  }

  clearError() {
    if (this.previousOperation !== ''){
      this.displayValue = this.previousOperation;
    }
 
  }
  
  
  
}
