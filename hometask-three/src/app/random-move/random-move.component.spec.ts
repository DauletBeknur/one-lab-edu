import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMoveComponent } from './random-move.component';

describe('RandomMoveComponent', () => {
  let component: RandomMoveComponent;
  let fixture: ComponentFixture<RandomMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
