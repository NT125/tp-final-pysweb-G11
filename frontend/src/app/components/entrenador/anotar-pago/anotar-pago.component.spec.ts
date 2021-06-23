import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotarPagoComponent } from './anotar-pago.component';

describe('AnotarPagoComponent', () => {
  let component: AnotarPagoComponent;
  let fixture: ComponentFixture<AnotarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotarPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
