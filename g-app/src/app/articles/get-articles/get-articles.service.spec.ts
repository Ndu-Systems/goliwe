/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetArticlesService } from './get-articles.service';

describe('Service: GetArticles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetArticlesService]
    });
  });

  it('should ...', inject([GetArticlesService], (service: GetArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
