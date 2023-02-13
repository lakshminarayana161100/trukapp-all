import { TestBed } from '@angular/core/testing';

import { ShipperguardGuard } from './shipperguard.guard';

describe('ShipperguardGuard', () => {
  let guard: ShipperguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShipperguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
