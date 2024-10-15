import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})
export class CalcComponent {
  public res: number | null = null;
  public calcForm: FormGroup;
  public arrayWithSigns: string[] = ['+', '-', '*', '/'];

  constructor(private fb: FormBuilder) {
    // Инициализация формы
    this.calcForm = this.fb.group({
      firstNum: new FormControl(null, Validators.required),
      lastNum: new FormControl(null, Validators.required),
      picker: new FormControl('+', Validators.required)
    });

    // Подписка на изменения в форме
    this.calcForm.valueChanges.subscribe(() => {
      this.autoCalcCounter();
    });
  }

  // Геттеры для получения FormControl
  public get firstNumControl(): FormControl {
    return this.calcForm.get('firstNum') as FormControl;
  }

  public get lastNumControl(): FormControl {
    return this.calcForm.get('lastNum') as FormControl;
  }

  public get pickerControl(): FormControl {
    return this.calcForm.get('picker') as FormControl;
  }

  // Автоматический расчет при изменениях формы
  public autoCalcCounter(): void {
    const firstNum = this.firstNumControl.value;
    const lastNum = this.lastNumControl.value;
    const sign = this.pickerControl.value;

    if (firstNum !== null && lastNum !== null && sign) {
      switch (sign) {
        case '+':
          this.res = firstNum + lastNum;
          break;
        case '-':
          this.res = firstNum - lastNum;
          break;
        case '*':
          this.res = firstNum * lastNum;
          break;
        case '/':
          this.res = lastNum !== 0 ? firstNum / lastNum : null;
          break;
        default:
          this.res = null;
      }
    }
  }
  //* Color picker section
  public resClick = 0;
  public currentColorIndex = 0; // Индекс текущего цвета
  public colors: string[] = [
    'color-primary', 'color-accent', 'color-regular', 'color-light', 'color-dark-green-tea',
    'color-dark-haki', 'color-dark-black', 'color-dark-gray'
  ];

  // Уменьшение на 1
  public minusOne() {
    this.resClick -= 1;
    this.updateColor(-1); // Изменение индекса цвета
  }

  // Увеличение на 1
  public plusOne() {
    this.resClick += 1;
    this.updateColor(1); // Изменение индекса цвета
  }

  // Метод для изменения индекса цвета
  private updateColor(direction: number) {
    // Обновляем индекс, добавляя направление (1 или -1)
    this.currentColorIndex = (this.currentColorIndex + direction + this.colors.length) % this.colors.length;
  }

  // Получение текущего цвета
  public getCurrentColor(): string {
    return this.colors[this.currentColorIndex];
  }
}
