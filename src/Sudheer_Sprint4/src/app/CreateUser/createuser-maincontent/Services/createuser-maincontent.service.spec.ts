import { TestBed } from '@angular/core/testing';

import { CreateuserMaincontentService } from './createuser-maincontent.service';

describe('CreateuserMaincontentService', () => {
  let service: CreateuserMaincontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateuserMaincontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
