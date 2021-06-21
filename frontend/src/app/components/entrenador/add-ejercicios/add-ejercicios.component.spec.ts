import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEjerciciosComponent } from './add-ejercicios.component';

describe('AddEjerciciosComponent', () => {
  let component: AddEjerciciosComponent;
  let fixture: ComponentFixture<AddEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEjerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
