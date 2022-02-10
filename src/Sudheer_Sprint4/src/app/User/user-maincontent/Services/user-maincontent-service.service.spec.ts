import { TestBed } from '@angular/core/testing';

import { UserMaincontentService } from './user-maincontent-service.service';

describe('UserMaincontentServiceService', () => {
  let service: UserMaincontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMaincontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
