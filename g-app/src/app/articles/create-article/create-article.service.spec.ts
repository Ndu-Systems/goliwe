/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateArticleService } from './create-article.service';

describe('Service: CreateArticle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateArticleService]
    });
  });

  it('should ...', inject([CreateArticleService], (service: CreateArticleService) => {
    expect(service).toBeTruthy();
  }));
});
