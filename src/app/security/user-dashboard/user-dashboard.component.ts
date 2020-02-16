import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { TokenStoreService } from '../services/token-store.service';

@Component({
  selector: 'hamel-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public loginuser: any = {};
  constructor(
    private userService: UserService,
    private router: Router,
    private tokenStore: TokenStoreService
  ) {
    this.tokenStore.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {}
}
