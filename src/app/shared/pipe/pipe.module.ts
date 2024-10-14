import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './components/pipe/pipe.component';
import { PipeRouting } from './pipe.routing';
import { ShortStr } from './pipe/shortStr.pipe';

@NgModule({
  declarations: [PipeComponent, ShortStr],  // Добавляем ShortStr в declarations
  imports: [
    CommonModule,
    PipeRouting
  ],
  exports: [PipeComponent, ShortStr],  // Экспортируем ShortStr, чтобы его могли использовать другие модули
})
export class PipeModule { }
