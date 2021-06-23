import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRutinaAlumnoComponent } from './add-rutina-alumno.component';

describe('AddRutinaAlumnoComponent', () => {
  let component: AddRutinaAlumnoComponent;
  let fixture: ComponentFixture<AddRutinaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRutinaAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRutinaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
