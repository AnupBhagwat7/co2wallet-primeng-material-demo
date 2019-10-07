import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarEditComponent } from './nar-edit.component';

describe('NarEditComponent', () => {
  let component: NarEditComponent;
  let fixture: ComponentFixture<NarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
