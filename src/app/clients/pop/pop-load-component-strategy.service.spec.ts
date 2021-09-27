import { TestBed } from '@angular/core/testing';

import { PopLoadComponentStrategyService } from './pop-load-component-strategy.service';

describe('PopLoadComponentStrategyService', () => {
  let service: PopLoadComponentStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopLoadComponentStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
