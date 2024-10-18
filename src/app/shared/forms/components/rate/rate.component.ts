import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS } from '@angular/forms';

export interface RateOptions {
  rates: number;
  text?: string;
}

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: RateComponent,
    },
  ],
})
export class RateComponent implements ControlValueAccessor, OnChanges {
  @Input() options!: RateOptions;

  public currentRate: number = 0; // Инициализируем текущий рейтинг нулем
  public disabled: boolean = false;
  public rateArray: number[] = [];
  public touched = false;
  public rateForm: FormGroup;
  public defaultColor: string = 'ffffff17';  // Цвет по умолчанию
  public activeColor: string = 'ffffff';    // Цвет при клике

  constructor(private fb: FormBuilder) {
    this.rateForm = this.fb.group({
      rate: [null], // Инициализируем с пустым значением
    });
  }

  public ratesOptions: RateOptions = {
    rates: 5,
    text: 'How you rate our Quiz',
  };

  OnChanges = (currentRate: any) => {};
  onTouched = () => {};

  ngOnChanges(changes: any): void {
    if (changes['options'] && this.options) {
      this.fillRatesArr();
    }
  }

  public onRate(index: number) {
    this.markAsTouched();
    if (!this.disabled) {
      this.currentRate = index; // Устанавливаем текущий рейтинг
      this.OnChanges(this.currentRate);
    }
  }

  public writeValue(rate: number) {
    this.currentRate = rate;
  }

  public registerOnChange(fn: any): void {
    this.OnChanges = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  // Заполняем массив значений для отображения рейтинга
  private fillRatesArr() {
    this.rateArray = Array.from({ length: this.options.rates }, (_, i) => i + 1);
  }

  // Получаем цвет сердечка в зависимости от рейтинга
  public getColor(index: number): string {
    return this.currentRate >= index ? this.activeColor : this.defaultColor;
  }

  public sendForm() {
    console.log('Submitted rate:', this.currentRate);
  }
}
