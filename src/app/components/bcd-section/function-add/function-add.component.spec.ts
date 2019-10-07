import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAddComponent } from './function-add.component';

describe('FunctionAddComponent', () => {
  let component: FunctionAddComponent;
  let fixture: ComponentFixture<FunctionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
