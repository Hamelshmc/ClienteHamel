import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorEmpleadosComponent } from './paginador-empleados.component';

describe('PaginadorEmpleadosComponent', () => {
  let component: PaginadorEmpleadosComponent;
  let fixture: ComponentFixture<PaginadorEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
