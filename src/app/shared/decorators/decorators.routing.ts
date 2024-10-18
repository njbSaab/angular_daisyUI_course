import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DecoratorsComponent } from './components/decorators/decorators.component';


export const routes: Routes = [
  {
    path: "",
    component: DecoratorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorsRouting {}
