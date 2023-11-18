import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, of, tap, throwError} from 'rxjs';
import {UserInterface} from "../Interfaces/movie.interface";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {jwtDecode, JwtPayload as DefaultPayload} from "jwt-decode";


interface AuthResponseInterface {
  status: string
  token: string;
}

interface JwtPayload extends DefaultPayload {
  user: UserInterface;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  public user = new BehaviorSubject<UserInterface|null>(null);

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) { }

  checkAuth(){
    const token = localStorage.getItem('token');

    if (!token) return of(false)

    return this.http.get(`${this.apiUrl}/checkToken`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(map((res)=>{return true}), catchError(err => of(false)));

  }

  getAuth(userName: string, password: string){
    if (!userName || !password) return;

    const body = {
      user: userName,
      password: password
    }
    return this.http.post<AuthResponseInterface>(`${this.apiUrl}/login`, body).pipe(
      tap((res) => {
        const token = res.token;
        const decodedToken: any = jwtDecode(token)
        this.user.next(decodedToken.user)
        console.log(this.user.value)
        localStorage.setItem('token', token);
        this.router.navigate(['/home'])
      }),
      catchError((err) => {
        this.snackBar.open(err.error.error)
        return throwError(err);
      })
    ).subscribe();
  }

}
