import { TestBed } from '@angular/core/testing';

import { SettingsComponentResolver } from './settings-component.resolver';

describe('SettingsComponentResolver', () => {
  let resolver: SettingsComponentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SettingsComponentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
