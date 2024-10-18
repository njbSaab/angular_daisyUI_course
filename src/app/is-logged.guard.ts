import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: "root"
})

export class isLoggedGuardService implements CanActivate{

  constructor(private _userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this._userService.isUserLogged.pipe(
      map((isLogged) =>{
        if(isLogged){
          return true
        } else{
          return false
        }
      })
    )
  }

}

export const isLoggedGuarFn: CanActivateFn = (route, state) => {
  return true;
};
