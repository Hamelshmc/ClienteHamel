import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../material-module';
import { SecurityModule } from '../security/security.module';
import { EmpleadoModule } from '../empleado/empleado.module';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SecurityModule.forRoot(),
    EmpleadoModule.forRoot()
  ],
  exports: [ShellComponent]
})
export class CoreModule {}
