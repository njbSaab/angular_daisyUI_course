import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyChangeColorDirective } from '../directives/my-change-color.directive';
import { HostChagesColorsComponent } from '../host-chages-colors/host-chages-colors.component';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule, MyChangeColorDirective, HostChagesColorsComponent],
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {

  // Переменная для отслеживания текущего состояния
  public isAccent = false;
  title = "directives";

  // Массив классов для директивы
  public colors: string[] = [
    'color-primary', 'color-accent', 'color-regular', 'color-light', 'color-dark'
  ];

  // Метод для переключения классов
  toggleClasses() {
    this.isAccent = !this.isAccent;
  }

  // Массив объектов с классами и текстом
  public badges = [
    { className: 'badge', textContent: 'default' },
    { className: 'badge badge-neutral', textContent: 'neutral' },
    { className: 'badge badge-primary', textContent: 'primary' },
    { className: 'badge badge-secondary', textContent: 'secondary' },
    { className: 'badge badge-accent', textContent: 'accent' },
    { className: 'badge badge-ghost', textContent: 'ghost' }
  ];
}
