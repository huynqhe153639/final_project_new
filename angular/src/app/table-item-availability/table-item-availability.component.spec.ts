import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemAvailabilityComponent } from './table-item-availability.component';

describe('TableItemAvailabilityComponent', () => {
  let component: TableItemAvailabilityComponent;
  let fixture: ComponentFixture<TableItemAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
