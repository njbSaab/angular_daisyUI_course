import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc/calc.component';
import { ReactiveFormsModule } from '@angular/forms'; // Добавил только ReactiveFormsModule

@NgModule({
  declarations: [
    CalcComponent, // Зарегистрировали компонент
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Подключаем ReactiveFormsModule, чтобы формы работали
  ],
  exports: [
    CalcComponent // Экспортируем компонент, если нужно использовать в других модулях
  ]
})
export class CalcModule { }
