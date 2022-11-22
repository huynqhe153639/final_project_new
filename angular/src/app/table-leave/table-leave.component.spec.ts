import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeaveComponent } from './table-leave.component';

describe('TableLeaveComponent', () => {
  let component: TableLeaveComponent;
  let fixture: ComponentFixture<TableLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
