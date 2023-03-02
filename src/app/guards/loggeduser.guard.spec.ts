import { TestBed } from '@angular/core/testing';

import { LoggeduserGuard } from './loggeduser.guard';

describe('LoggeduserGuard', () => {
  let guard: LoggeduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggeduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
