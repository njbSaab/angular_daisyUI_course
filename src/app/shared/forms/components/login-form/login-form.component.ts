import { Component } from '@angular/core';

interface ITemplateFormI{
  login: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  public templateForm: ITemplateFormI ={
    login: '',
    email: '',
    password: '12345'
  }

  public sendForm(){
    console.log(this.templateForm);
  }

}
