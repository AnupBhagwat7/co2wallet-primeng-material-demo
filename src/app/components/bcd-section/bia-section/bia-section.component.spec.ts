import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiaSectionComponent } from './bia-section.component';

describe('BiaSectionComponent', () => {
  let component: BiaSectionComponent;
  let fixture: ComponentFixture<BiaSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiaSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
