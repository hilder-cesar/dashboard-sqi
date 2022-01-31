import { TestBed } from '@angular/core/testing';

import { ErrorAppInterceptor } from './error-app.interceptor';

describe('ErrorAppService', () => {
  let service: ErrorAppInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorAppInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
