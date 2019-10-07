import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarAddComponent } from './nar-add.component';

describe('NarAddComponent', () => {
  let component: NarAddComponent;
  let fixture: ComponentFixture<NarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
