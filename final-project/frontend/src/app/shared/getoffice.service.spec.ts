import { TestBed } from '@angular/core/testing';

import { GetofficeService } from './getoffice.service';

describe('GetofficeService', () => {
  let service: GetofficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetofficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
