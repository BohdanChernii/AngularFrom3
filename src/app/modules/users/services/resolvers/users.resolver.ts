import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserServiceService} from "../user.service";
import {IUser} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {
  constructor(private userService: UserServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> {
    return this.userService.getAll()
  }
}
