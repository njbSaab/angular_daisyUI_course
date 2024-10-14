import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';


export const routes: Routes = [
  {
    path: "",
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRouting {}
