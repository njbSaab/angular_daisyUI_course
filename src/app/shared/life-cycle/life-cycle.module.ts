import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './components/children/children.component';
import { ParentComponent } from './components/parent/parent.component';
import { LifeCycleRouting } from './life-cycle.routing.module';



@NgModule({
  declarations: [ChildrenComponent, ParentComponent],
  imports: [
    CommonModule,
    LifeCycleRouting
  ],
  exports: [ChildrenComponent, ParentComponent]
})
export class LifeCycleModule { }
