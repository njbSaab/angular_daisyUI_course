import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignalComponent } from './components/signal/signal.component';

export const routes: Routes = [
  {
    path: "",
    component: SignalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalRouting { }
