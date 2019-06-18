import { TestBed } from '@angular/core/testing';

import { MbooksService } from './mbooks.service';

describe('MbooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MbooksService = TestBed.get(MbooksService);
    expect(service).toBeTruthy();
  });
});
