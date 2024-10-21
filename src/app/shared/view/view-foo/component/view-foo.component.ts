import { Component } from '@angular/core';
import { UserService } from '../../../../service/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface TodoItemI {
  text: string;
}

// const enterTransition = transition(':enter', [
//   style({opacity: 0}),
//   animate( '1s ease-in', style({opacity: 1})),
// ])
// const leaveTransition = transition(':leave', [
//   style({opacity: 1}),
//   animate( '.8s ease-in', style({opacity: 0})),
// ])

// const fadeIn  = trigger('fadeIn', [enterTransition])
// const fadeOut = trigger('fadeOut', [leaveTransition])


export const fadeInOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })), // Состояние для скрытия
  state('*', style({ opacity: 1 })), // Состояние для показа
  transition(':enter', [ // Вход анимации
    style({ opacity: 0 }),
    animate('0.5s ease-in', style({ opacity: 1 }))
  ]),
  transition(':leave', [ // Выход анимации
    animate('0.5s ease-out', style({ opacity: 0 }))
  ])
]);

@Component({
  selector: 'app-view-foo',
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss',
  animations: [fadeInOut],

})
export class ViewFooComponent {
  public text = false
  constructor(private _userService: UserService) { }

  public login(): void{
    this._userService.logic()
  }

  public todoArr: TodoItemI[] = [
    {
      text:  'foo',
    },
    {
      text:  'bar',
    },
    {
      text: 'hi'
    }
  ]

  showText() {
    this.text = !this.text; // Переключаем состояние переменной
  }

}
