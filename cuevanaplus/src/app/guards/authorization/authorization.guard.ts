import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAdmin = this.authService.getUserInfo()?.isAdmin || false;
    const checkAuth = this.authService.checkAuth()

    if (checkAuth){
      if (state.url === '/home'){
        return true
      }else {
        if (isAdmin){
          return true;
        }else {
          this.router.navigate(['/home']);
          return false
        }
      }
    }else {
      this.router.navigate(['/home']);
      return false;
    }
  }



}
