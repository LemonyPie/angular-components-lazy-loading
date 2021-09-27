import { TestBed } from '@angular/core/testing';

import { JazzLoadComponentStrategyService } from './jazz-load-component-strategy.service';

describe('JazzLoadComponentStrategyService', () => {
  let service: JazzLoadComponentStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JazzLoadComponentStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
