import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFooComponent } from './view-foo/component/view-foo.component';
import { ViewBarComponent } from './view-bar/component/view-bar.component';
import { ViewRouting } from './view.routing';
import { ToDoComponent } from './to-do/to-do.component';



@NgModule({
  declarations: [
    ViewFooComponent,
    ViewBarComponent,
    ToDoComponent
  ],
  imports: [
    CommonModule,
    ViewRouting,

  ],
  exports:[
    ViewFooComponent,
    ViewBarComponent,
    ToDoComponent
  ]
})
export class ViewModule { }
