import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of, switchMap} from 'rxjs';
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

    return this.authService.checkAuth().pipe(
      switchMap((isAuthenticated: boolean) => {
        const isAdmin = this.authService.getUserInfo()?.isAdmin || false;

        if (isAuthenticated) {
          if (state.url === '/home') {
            return of(true);
          } else {
            if (isAdmin) {
              return of(true);
            } else {
              this.router.navigate(['/home']);
              return of(false);
            }
          }
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      })
    );
  }

  isAuthenticated(){
    let isAuthenticated = false
    this.authService.checkAuth().subscribe((res)=> {
    isAuthenticated = res
      console.log(res)
    })
    return isAuthenticated
  }
}
