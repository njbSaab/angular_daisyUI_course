import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isUserLogged = new BehaviorSubject<boolean>(false)

  constructor() { }

  public logic():void{
    this.isUserLogged.next(true)
  }
}
