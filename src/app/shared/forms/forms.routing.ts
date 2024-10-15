import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


export const routes: Routes = [
  {
    path: "",
    component: FormComponent,
  },
  {
    path: "drawer-form",
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRouting {}
