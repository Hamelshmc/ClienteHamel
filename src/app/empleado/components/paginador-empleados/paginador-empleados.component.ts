import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'hamel-paginador-empleados',
  templateUrl: './paginador-empleados.component.html',
  styleUrls: ['./paginador-empleados.component.scss']
})
export class PaginadorEmpleadosComponent implements OnInit {
  @Input() public page: number;
  @Input() public size: number;

  @Output('page') public onPage = new EventEmitter<number>();
  @Output('size') public onSize = new EventEmitter<number>();

  public pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor() {}

  ngOnInit() {}

  public PasarPagina(e: PageEvent): void {
    this.onPage.emit(e.pageIndex + 1);
    this.onSize.emit(e.pageSize);
  }
}
