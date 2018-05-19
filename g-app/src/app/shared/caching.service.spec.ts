/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CachingService } from './caching.service';

describe('Service: Caching', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachingService]
    });
  });

  it('should ...', inject([CachingService], (service: CachingService) => {
    expect(service).toBeTruthy();
  }));
});
