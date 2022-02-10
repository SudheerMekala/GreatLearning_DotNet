import { TestBed } from '@angular/core/testing';

import { UpdateuserMaincontentService } from './updateuser-maincontent.service';

describe('UpdateuserMaincontentService', () => {
  let service: UpdateuserMaincontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateuserMaincontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
