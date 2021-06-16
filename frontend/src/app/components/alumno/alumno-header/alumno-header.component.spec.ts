import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoHeaderComponent } from './alumno-header.component';

describe('AlumnoHeaderComponent', () => {
  let component: AlumnoHeaderComponent;
  let fixture: ComponentFixture<AlumnoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
