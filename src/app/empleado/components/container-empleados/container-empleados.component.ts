import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { TokenStoreService } from 'src/app/security/services/token-store.service';

@Component({
  selector: 'hamel-container-empleados',
  templateUrl: './container-empleados.component.html',
  styleUrls: ['./container-empleados.component.scss']
})
export class ContainerEmpleadosComponent implements OnInit {
  public numeroSize = 5;
  public almacenEmleados: Empleado[] = [];
  public loginuser: any = {};
  public textoBusqueda: string;
  public numeroResultadosBusqueda: number;

  @Input() size: number;
  @Input() page: number;

  constructor(private empleadoService: EmpleadoService, private tokenStore: TokenStoreService) {
    this.size = this.numeroSize;
    this.page = 0;
    this.textoBusqueda = '';
    this.tokenStore.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.buscarEmpleados();
  }

  public buscarEmpleados(): void {
    this.empleadoService
      .getAllEmpleados(this.loginuser.token, this.textoBusqueda, this.page, this.size)
      .subscribe(almacenEmleadosResponse => {
        this.almacenEmleados = almacenEmleadosResponse.content;
      });
  }

  public actualizarDatosTabla(almacen: Empleado[]): void {
    this.almacenEmleados = almacen;
  }

  public cambioTextoBusqueda(texto: string) {
    this.page = 0;
    this.size = 5;
    this.textoBusqueda = texto;
    this.buscarEmpleados();
  }

  public cambioNumeroEmpleados(numeroEmpleados: number): void {
    this.size = numeroEmpleados;
    this.buscarEmpleados();
  }

  public cambioNumeroPagina(numeroPagina: number): void {
    this.page = numeroPagina;
    this.buscarEmpleados();
  }
}
