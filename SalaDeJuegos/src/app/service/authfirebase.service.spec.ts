import { TestBed } from '@angular/core/testing';

import { AuthFirebaseService } from './authfirebase.service';

describe('FirebaseService', () => {
  let service: AuthFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
