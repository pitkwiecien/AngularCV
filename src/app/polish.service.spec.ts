import { TestBed } from '@angular/core/testing';

import { PolishService } from './polish.service';

describe('PolishService', () => {
  let service: PolishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
