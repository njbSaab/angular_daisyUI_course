import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  public myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[ Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  public sendForm(){
    if(this.myForm.valid){
      console.log(this.myForm.value);
    }else{
      
    }
  }
}
