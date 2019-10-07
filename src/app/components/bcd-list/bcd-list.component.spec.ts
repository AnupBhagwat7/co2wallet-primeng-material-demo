import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcdListComponent } from './bcd-list.component';

describe('BcdListComponent', () => {
  let component: BcdListComponent;
  let fixture: ComponentFixture<BcdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
