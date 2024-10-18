import { Component } from '@angular/core';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-view-foo',
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss'
})
export class ViewFooComponent {
  constructor(private _userService: UserService) { }

  public login(): void{
    this._userService.logic()
  }

}
