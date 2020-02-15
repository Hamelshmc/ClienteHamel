import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:9000/user/';
  constructor(private http: HttpClient) {
    this.http = http;
  }

  register(user: object): Observable<any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(this.API_URL, user, { headers: headers });
  }
}
