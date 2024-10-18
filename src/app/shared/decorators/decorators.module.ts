import { ChildDecoratorComponent } from './components/child-decorator/child-decorator.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { DecoratorsRouting } from './decorators.routing';

@NgModule({
  declarations: [DecoratorsComponent, ChildDecoratorComponent],
  imports: [CommonModule, DecoratorsRouting],
  exports: [DecoratorsComponent, ChildDecoratorComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DecoratorsModule {
}
