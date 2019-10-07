import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscibeComponent } from './subscibe.component';

describe('SubscibeComponent', () => {
  let component: SubscibeComponent;
  let fixture: ComponentFixture<SubscibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
