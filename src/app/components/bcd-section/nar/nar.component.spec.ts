import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarComponent } from './nar.component';

describe('NarComponent', () => {
  let component: NarComponent;
  let fixture: ComponentFixture<NarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
