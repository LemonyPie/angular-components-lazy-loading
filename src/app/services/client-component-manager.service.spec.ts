import { TestBed } from '@angular/core/testing';

import { ClientComponentManagerService } from './client-component-manager.service';

describe('ClientComponentManagerService', () => {
  let service: ClientComponentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientComponentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
