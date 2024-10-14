import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { ObjectListRouting } from './object-list.routing.module';
import { ObjectItemComponent } from './components/item/object-item.component';



@NgModule({
  declarations: [ ObjectListComponent, ObjectItemComponent],
  imports: [CommonModule, ObjectListRouting],
  exports:[ ObjectListComponent, ObjectItemComponent],
  providers:[]
})
export class ObjectListModule { }
