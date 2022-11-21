import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemRosterComponent } from './table-item-roster.component';

describe('TableItemRosterComponent', () => {
  let component: TableItemRosterComponent;
  let fixture: ComponentFixture<TableItemRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemRosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
