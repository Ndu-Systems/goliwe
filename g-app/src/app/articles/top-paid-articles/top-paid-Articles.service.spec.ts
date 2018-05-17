/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopPaidArticlesService } from './top-paid-Articles.service';

describe('Service: TopPaidArticles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopPaidArticlesService]
    });
  });

  it('should ...', inject([TopPaidArticlesService], (service: TopPaidArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
