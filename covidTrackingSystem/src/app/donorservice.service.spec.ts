import { TestBed } from '@angular/core/testing';

import { DonorserviceService } from './donorservice.service';

describe('DonorserviceService', () => {
  let service: DonorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
