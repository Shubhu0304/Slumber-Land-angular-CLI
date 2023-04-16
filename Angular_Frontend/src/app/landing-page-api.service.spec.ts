import { TestBed } from '@angular/core/testing';

import { LandingPageApiService } from './landing-page-api.service';

describe('LandingPageApiService', () => {
  let service: LandingPageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
