import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryStrategyComponent } from './recovery-strategy.component';

describe('RecoveryStrategyComponent', () => {
  let component: RecoveryStrategyComponent;
  let fixture: ComponentFixture<RecoveryStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
