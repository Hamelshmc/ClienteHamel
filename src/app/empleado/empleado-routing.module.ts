import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerEmpleadosComponent } from './components/container-empleados/container-empleados.component';
import { AuthInterceptorService } from '../security/services/auth-interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: ContainerEmpleadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule {}
