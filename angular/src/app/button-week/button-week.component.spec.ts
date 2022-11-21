import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWeekComponent } from './button-week.component';

describe('ButtonWeekComponent', () => {
  let component: ButtonWeekComponent;
  let fixture: ComponentFixture<ButtonWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
