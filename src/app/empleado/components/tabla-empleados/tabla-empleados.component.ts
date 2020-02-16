import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../../model/empleado';

@Component({
  selector: 'hamel-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.scss']
})
export class TablaEmpleadosComponent implements OnInit, OnChanges {
  @Input() public almacenEmpleados: Empleado[];
  @Output() public page: number;
  @Output() public size: number;
  @ViewChild(MatSort) sort: MatSort;

  public pageEvent: PageEvent;
  public mostrarColumnas = [
    'nombre',
    'apellido',
    'email',
    'telefono',
    'genero',
    'especialidad'
  ];
  public dataSource: MatTableDataSource<Empleado>;
  public numeroDePaginaActual: number[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Empleado>(this.almacenEmpleados);
    this.dataSource.sort = this.sort;
  }
}
