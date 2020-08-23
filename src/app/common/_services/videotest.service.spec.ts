import { TestBed } from '@angular/core/testing';

import { VideotestService } from './videotest.service';

describe('VideotestService', () => {
  let service: VideotestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideotestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
