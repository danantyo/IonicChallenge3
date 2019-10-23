import { TestBed } from '@angular/core/testing';

import { Config2Service } from './config2.service';

describe('Config2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Config2Service = TestBed.get(Config2Service);
    expect(service).toBeTruthy();
  });
});
