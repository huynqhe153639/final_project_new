import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftOfferComponent } from './shift-offer.component';

describe('ShiftOfferComponent', () => {
  let component: ShiftOfferComponent;
  let fixture: ComponentFixture<ShiftOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
