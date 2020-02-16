import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { TablaEmpleadosComponent } from './components/tabla-empleados/tabla-empleados.component';
import { BuscadorEmpleadosComponent } from './components/buscador-empleados/buscador-empleados.component';
import { PaginadorEmpleadosComponent } from './components/paginador-empleados/paginador-empleados.component';
import { ContainerEmpleadosComponent } from './components/container-empleados/container-empleados.component';
import { MaterialModule } from '../material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../security/services/auth-interceptor.service';
import { SecurityModule } from '../security/security.module';

@NgModule({
  declarations: [
    TablaEmpleadosComponent,
    BuscadorEmpleadosComponent,
    PaginadorEmpleadosComponent,
    ContainerEmpleadosComponent
  ],
  imports: [CommonModule, EmpleadoRoutingModule, MaterialModule, ReactiveFormsModule]
})
export class EmpleadoModule {
  static forRoot(): ModuleWithProviders<EmpleadoModule> {
    return {
      ngModule: EmpleadoModule,
      providers: [
      ]
    };
  }
}
