import { TestBed } from '@angular/core/testing';

import { BookserveService } from './bookserve.service';

describe('BookserveService', () => {
  let service: BookserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
