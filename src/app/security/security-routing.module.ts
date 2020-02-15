import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userdashboard',
    component: UserDashboardComponent,
    canActivate: [AuthInterceptorService]
  },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthInterceptorService]
  },
  {
    path: '**',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}
