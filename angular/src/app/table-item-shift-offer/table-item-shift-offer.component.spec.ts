import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemShiftOfferComponent } from './table-item-shift-offer.component';

describe('TableItemShiftOfferComponent', () => {
  let component: TableItemShiftOfferComponent;
  let fixture: ComponentFixture<TableItemShiftOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemShiftOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemShiftOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
