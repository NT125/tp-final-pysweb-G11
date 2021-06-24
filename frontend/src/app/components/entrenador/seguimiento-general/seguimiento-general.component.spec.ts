import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoGeneralComponent } from './seguimiento-general.component';

describe('SeguimientoGeneralComponent', () => {
  let component: SeguimientoGeneralComponent;
  let fixture: ComponentFixture<SeguimientoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
