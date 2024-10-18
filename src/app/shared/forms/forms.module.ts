import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { FormsRouting } from './forms.routing';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RateComponent } from './components/rate/rate.component';

@NgModule({
  declarations: [FormComponent, LoginFormComponent, RateComponent],
  imports: [
    CommonModule,
    FormsRouting,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FormBuilder],
  exports: [FormComponent, LoginFormComponent, RateComponent],
})
export class FormsUIModule { }
