import { FormsUIModule } from './../forms/forms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs.component';
import { TabsRouting } from './tabs.routing';


@NgModule({
  declarations: [
    TabsComponent,
  ],
  imports: [
    CommonModule,
    TabsRouting,
    FormsUIModule
  ],
  exports:[
    TabsComponent,
  ]
})
export class TabsModule { }
