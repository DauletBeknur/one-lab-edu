import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmaiComponent } from './verify-emai.component';

describe('VerifyEmaiComponent', () => {
  let component: VerifyEmaiComponent;
  let fixture: ComponentFixture<VerifyEmaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
