import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAlumnoComponent } from './gestionar-alumno.component';

describe('GestionarAlumnoComponent', () => {
  let component: GestionarAlumnoComponent;
  let fixture: ComponentFixture<GestionarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
