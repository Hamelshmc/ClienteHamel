import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEmpleadosComponent } from './container-empleados.component';

describe('ContainerEmpleadosComponent', () => {
  let component: ContainerEmpleadosComponent;
  let fixture: ComponentFixture<ContainerEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
