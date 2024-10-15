import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// Функция для создания валидатора на основе регулярного выражения
export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return forbidden ? null : { forbiddenPattern: { value: control.value } };
  };
}

export const conformPass: ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
  return control.value.firstPass === control.value.lastPass ? null : {PasswordDoNotMatch: true}
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  //* Декларируем formBuilderForm как FormGroup
  public formBuilderForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    // Инициализируем formBuilderForm через FormBuilder с точными типами
    this.formBuilderForm = this._fb.group({
      name: ['Nj', Validators.required],
      skills: this._fb.array([]) // Используем FormArray для skills
    });
  }

  // Получаем доступ к FormArray
  public get skills(): FormArray {
    return this.formBuilderForm.get('skills') as FormArray;
  }

  // Создаем новую группу для скиллов
  public newSkills(): FormGroup {
    return this._fb.group({
      skill: '',
    });
  }

  // Добавление новой группы скиллов
  public addSkill() {
    this.skills.push(this.newSkills());
  }

  // Удаление скилла по индексу
  public removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  // Отправка формы
  public onSubmit() {
    console.log(this.formBuilderForm.value);
  }
  //*

  // Регулярное выражение для валидации email
  private emailRegExp: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Обычная форма с валидацией
  public myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  // Кастомная форма с валидацией email с использованием checkRegExp
  public customForm = new FormGroup({
    mailTo: new FormControl('', [checkRegExp(this.emailRegExp), Validators.required])
  });

  public repeatFieldForm = new FormGroup({
    sendMail: new FormControl('', [Validators.required, checkRegExp(this.emailRegExp)]),
    firstPass: new FormControl('', Validators.required),
    lastPass: new FormControl('', Validators.required)
  },
  conformPass)

  // Метод отправки формы
  public sendForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }

    if (this.customForm.valid) {
      console.log(this.customForm.value);
    } else {
      console.log('Custom form is invalid');
    }
  }
}
