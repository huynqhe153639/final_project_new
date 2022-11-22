import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredDayComponent } from './preferred-day.component';

describe('PreferredDayComponent', () => {
  let component: PreferredDayComponent;
  let fixture: ComponentFixture<PreferredDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferredDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
