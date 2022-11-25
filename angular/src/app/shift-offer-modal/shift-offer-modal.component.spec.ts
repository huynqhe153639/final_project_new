import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftOfferModalComponent } from './shift-offer-modal.component';

describe('ShiftOfferModalComponent', () => {
  let component: ShiftOfferModalComponent;
  let fixture: ComponentFixture<ShiftOfferModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftOfferModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftOfferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
