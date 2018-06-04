/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleCurrencyService } from './google-currency.service';

describe('Service: GoogleCurrency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleCurrencyService]
    });
  });

  it('should ...', inject([GoogleCurrencyService], (service: GoogleCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
