import { TestBed } from '@angular/core/testing';

import { ClientComponentLoaderStrategyContextService } from './client-component-loader-strategy-context.service';

describe('ClientComponentLoaderStrategyContextService', () => {
  let service: ClientComponentLoaderStrategyContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientComponentLoaderStrategyContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
