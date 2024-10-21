import { log } from 'node:console';
import { TodoItemI } from './../view-foo/component/view-foo.component';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToDoComponent {
  @Input('todo') todoItem!:TodoItemI

  public returnBool(): boolean{
    // console.log('component render');
    console.log(this.todoItem);
            console.log
            (this.todoItem.text);
    return true;
  }
}
