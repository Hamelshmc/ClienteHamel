import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'hamel-buscador-empleados',
  templateUrl: './buscador-empleados.component.html',
  styleUrls: ['./buscador-empleados.component.scss']
})
export class BuscadorEmpleadosComponent implements OnInit {
  @Output() public textoBusqueda: EventEmitter<string>;
  public mensajeDeError: string;
  public busqueda: string;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.textoBusqueda = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      buscadorControl: ['']
    });
    this.formGroup
      .get('buscadorControl')
      .valueChanges.pipe(debounceTime(400))
      .subscribe(termino => {
        this.textoBusqueda.emit(this.formGroup.get('buscadorControl').value);
      });
  }
  public buscar() {
    this.textoBusqueda.emit(this.formGroup.get('buscadorControl').value);
  }
}
