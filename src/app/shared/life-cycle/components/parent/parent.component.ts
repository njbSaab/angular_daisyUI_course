import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public obj: string = "title";
  public show = false; // Переменная для управления отображением дочернего компонента

  public handleEvent(value: string) {
    this.obj = value;
  }

  // Метод для переключения состояния отображения дочернего компонента
  public clickHandler(): void {
    this.show = !this.show;
  }
}
