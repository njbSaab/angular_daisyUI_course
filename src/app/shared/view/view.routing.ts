import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewFooComponent } from './view-foo/component/view-foo.component';


export const routes: Routes = [
  {
    path: "",
    component: ViewFooComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRouting {}
