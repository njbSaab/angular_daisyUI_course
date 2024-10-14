import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChildrenComponent } from './components/children/children.component';
import { ParentComponent } from './components/parent/parent.component';


export const routes: Routes = [
  {
  path: "",
  component: ParentComponent,
  },
  {
    path: "children", component: ChildrenComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleRouting {}
