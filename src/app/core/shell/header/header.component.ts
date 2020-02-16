import { Component, OnInit, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStoreService } from 'src/app/security/services/token-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hamel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = environment.appName;
  public currentstatus: any;
  public rol: any;

  constructor(private tokenStore: TokenStoreService, private router: Router) {
    this.getStatus();
  }
  ngOnInit(): void {}

  getStatus() {
    return (this.currentstatus = this.tokenStore.getStatus().subscribe(currentstatus => {
      this.currentstatus = currentstatus;
      this.rol = this.tokenStore.getRol();
    }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentstatus = false;
    this.router.navigate(['login']);
  }
}
