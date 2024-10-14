import { RouterModule, Routes } from '@angular/router';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { ObjectItemComponent } from './components/item/object-item.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {
  path: "",
  component: ObjectListComponent,
  },
  {
    path: ":id", component: ObjectItemComponent,

  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectListRouting {}
