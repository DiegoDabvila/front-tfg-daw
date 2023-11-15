import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AbstractRepository {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  doRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    queryParams?: { [key: string]: any },
    body?: any
  ): Observable<T> {
    const headers = new HttpHeaders();

    let params = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(key => {
        params = params.append(key, queryParams[key]);
      });
    }

    const options = {
      headers,
      params,
      body
    };

    const requestUrl = `${this.apiUrl}/${url}`;

    switch (method) {
      case 'GET':
        return this.http.get<T>(requestUrl, options);
      case 'POST':
        return this.http.post<T>(requestUrl, body, options);
      case 'PUT':
        return this.http.put<T>(requestUrl, body, options);
      case 'DELETE':
        return this.http.delete<T>(requestUrl, options);
      default:
        throw new Error('Método no válido');
    }
  }
}
