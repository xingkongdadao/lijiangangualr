import { TestBed } from '@angular/core/testing';

import { WordmeansService } from './wordmeans.service';

describe('WordmeansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordmeansService = TestBed.get(WordmeansService);
    expect(service).toBeTruthy();
  });
});
