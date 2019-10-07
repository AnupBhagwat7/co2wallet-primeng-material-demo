import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecstrategySectionComponent } from './recstrategy-section.component';

describe('RecstrategySectionComponent', () => {
  let component: RecstrategySectionComponent;
  let fixture: ComponentFixture<RecstrategySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecstrategySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecstrategySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
