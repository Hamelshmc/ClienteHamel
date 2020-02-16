import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject, Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {
  private token = '';
  private token$ = new BehaviorSubject<string>('');
  private subject = new Subject<any>();
  constructor() {}

  public select$ = () => this.token$.asObservable();
  public dispatch(token: string) {
    this.token = token;
    this.token$.next(this.token);
  }

  public isLoggedIn(): void {
    if (localStorage.getItem('currentUser')) {
      this.subject.next({ status: true });
    } else {
      this.subject.next({ status: false });
    }
  }

  public getRol() {
    const currentUser = localStorage.getItem('currentUser');
    const resultado = JSON.parse(currentUser);
    if (resultado.roles[0] === 'ADMIN' || resultado.roles[1] === 'ADMIN') {
      return 'ADMIN';
    } else return 'USER';
  }

  public clearStatus() {
    this.subject.next();
  }

  public getStatus(): Observable<any> {
    return this.subject.asObservable();
  }
}
