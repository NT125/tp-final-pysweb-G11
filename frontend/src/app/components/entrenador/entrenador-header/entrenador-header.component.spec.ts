import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorHeaderComponent } from './entrenador-header.component';

describe('EntrenadorHeaderComponent', () => {
  let component: EntrenadorHeaderComponent;
  let fixture: ComponentFixture<EntrenadorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
