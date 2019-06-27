import { TestBed } from '@angular/core/testing';

import { ApiSearchService } from './api-search.service';

describe('ApiSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSearchService = TestBed.get(ApiSearchService);
    expect(service).toBeTruthy();
  });
});
