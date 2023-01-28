import { TestBed } from '@angular/core/testing';

import { AuthpaymentService } from './authpayment.service';

describe('AuthpaymentService', () => {
  let service: AuthpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
