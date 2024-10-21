import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalComponent } from './components/signal/signal.component';
import { SignalRouting } from './signal.routing';



@NgModule({
  declarations: [SignalComponent],
  imports: [
    CommonModule,
    SignalRouting
  ],
  exports: [SignalComponent]
})
export class SignalModule { }
