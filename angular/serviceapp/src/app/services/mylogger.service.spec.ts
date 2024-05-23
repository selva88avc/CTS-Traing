import { TestBed } from '@angular/core/testing';

import { MyloggerService } from './mylogger.service';

describe('MyloggerService', () => {
  let service: MyloggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyloggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
