import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {
  private token = '';
  private token$ = new BehaviorSubject<string>('');

  constructor() {}

  public select$ = () => this.token$.asObservable();
  public dispatch(token: string) {
    this.token = token;
    this.token$.next(this.token);
  }
}
