import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Импортируем необходимые классы

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  public arrayWithSigns = ["+", "-", "*", "/"];

  // Создаем группу формы с контролами
  calcForm = new FormGroup({
    firstNum: new FormControl('', Validators.required),  // Добавил валидатор
    picker: new FormControl('', Validators.required),     // Добавил валидатор
    lastNum: new FormControl('', Validators.required),    // Исправил опечатку
  });

  constructor() {}

  public res: number = 0; // Переменная для хранения результата как числа

  public calcCounter() {
    const formValuesObject = this.calcForm.value; // Получаем объект со значениями формы

    console.log(this.calcForm.value);

    // Проверяем, что все значения существуют и уже являются числами
    const firstNum = parseFloat(formValuesObject.firstNum ?? '0'); // Если поле пустое, используем значение по умолчанию 0
    const lastNum = parseFloat(formValuesObject.lastNum ?? '0'); // Если поле пустое, используем значение по умолчанию 0
    const operationSign = formValuesObject.picker ?? '+'; // Устанавливаем знак по умолчанию '+'

    if (!isNaN(firstNum) && !isNaN(lastNum)) {
      this.res = this.calculateResult(firstNum, lastNum, operationSign);
    } else {
     0;
    }
  }

  private calculateResult(firstNum: number, lastNum: number, sign: string): number {
    let result: number;

    switch (sign) {
      case '+':
        result = firstNum + lastNum;
        break;
      case '-':
        result = firstNum - lastNum;
        break;
      case '*':
        result = firstNum * lastNum;
        break;
      case '/':
        result = lastNum !== 0 ? firstNum / lastNum : NaN;
        break;
      default:
        return 0;
    }

    return result;
  }
}
