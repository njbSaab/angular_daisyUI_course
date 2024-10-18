import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFooComponent } from './view-foo/component/view-foo.component';
import { ViewBarComponent } from './view-bar/component/view-bar.component';
import { ViewRouting } from './view.routing';



@NgModule({
  declarations: [
    ViewFooComponent,
    ViewBarComponent
  ],
  imports: [
    CommonModule,
    ViewRouting
  ],
  exports:[
    ViewFooComponent,
    ViewBarComponent
  ]
})
export class ViewModule { }
