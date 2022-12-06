import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmEmailComponent } from './form-confirm-email.component';

describe('FormConfirmEmailComponent', () => {
  let component: FormConfirmEmailComponent;
  let fixture: ComponentFixture<FormConfirmEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfirmEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfirmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
