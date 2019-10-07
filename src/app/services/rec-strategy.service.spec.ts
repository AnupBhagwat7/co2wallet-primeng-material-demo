import { TestBed } from '@angular/core/testing';

import { RecStrategyService } from './rec-strategy.service';

describe('RecStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecStrategyService = TestBed.get(RecStrategyService);
    expect(service).toBeTruthy();
  });
});
