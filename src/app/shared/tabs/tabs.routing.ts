import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsComponent } from './components/tabs.component';

export const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRouting {}
