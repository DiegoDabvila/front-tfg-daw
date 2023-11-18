import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import {UserInterface} from "../Interfaces/movie.interface";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface AuthResponseInterface {
  status: string
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private user = new BehaviorSubject<UserInterface|null>(null);

  constructor(private http: HttpClient) { }

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
      username: userName,
      password: password
    }
    return this.http.post<AuthResponseInterface>( `${this.apiUrl}/login`,body).subscribe((res)=>{
      if (res.status != "error") {
        const token = res.token;
      }else {

      }


    })
  }

}
