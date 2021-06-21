import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRutinaComponent } from './menu-rutina.component';

describe('MenuRutinaComponent', () => {
  let component: MenuRutinaComponent;
  let fixture: ComponentFixture<MenuRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
