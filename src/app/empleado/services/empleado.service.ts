import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  API_EMPLEADOS = 'http://localhost:9000/empleado/';
  constructor(private http: HttpClient) {
    this.http = http;
  }
  public getAllEmpleados(
    token: any,
    nombre: string,
    page: number,
    size: number
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('size', size + '');
    params = params.append('page', page + '');
    if (nombre !== null && typeof nombre !== undefined && nombre !== '') {
      params = params.append('nombre', nombre);
    }
    /*
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');

    headers.append('Authorization', 'bearer ' + token); */

    const headers = new HttpHeaders({ Authorization: 'bearer ' + token });
    return this.http.get(this.API_EMPLEADOS, { headers, params });
  }
}
