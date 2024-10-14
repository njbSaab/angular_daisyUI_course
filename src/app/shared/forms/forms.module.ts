import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsRouting } from './forms.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule, FormsRouting, ReactiveFormsModule
  ],
  exports: [FormComponent],
})
export class FormsModule { }
