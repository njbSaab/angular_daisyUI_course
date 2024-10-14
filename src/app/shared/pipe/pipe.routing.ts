import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [
  {
    path: "",
    component: PipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRouting {}
