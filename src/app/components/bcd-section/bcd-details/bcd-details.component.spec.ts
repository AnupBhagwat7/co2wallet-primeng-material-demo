import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcdDetailsComponent } from './bcd-details.component';

describe('BcdDetailsComponent', () => {
  let component: BcdDetailsComponent;
  let fixture: ComponentFixture<BcdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
