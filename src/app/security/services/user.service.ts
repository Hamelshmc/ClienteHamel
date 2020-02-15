import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_USER = 'http://localhost:9000/user/';
  API_LOGIN = 'http://localhost:9000/login';
  constructor(private http: HttpClient) {
    this.http = http;
  }

  public register(user: object): Observable<any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(this.API_USER, user, { headers });
  }

  public login(user: object): Observable<any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(this.API_LOGIN, user, { headers });
  }
}
