import { Component, OnInit } from '@angular/core';
import { TokenStoreService } from '../services/token-store.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hamel-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
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
