import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEmpleadosComponent } from './buscador-empleados.component';

describe('BuscadorEmpleadosComponent', () => {
  let component: BuscadorEmpleadosComponent;
  let fixture: ComponentFixture<BuscadorEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
