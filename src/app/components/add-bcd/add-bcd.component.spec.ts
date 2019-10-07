import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBcdComponent } from './add-bcd.component';

describe('AddBcdComponent', () => {
  let component: AddBcdComponent;
  let fixture: ComponentFixture<AddBcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
