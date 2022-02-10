import { TestBed } from '@angular/core/testing';

import { UpdateprojectMaincontentServiceService } from './updateproject-maincontent-service.service';

describe('UpdateprojectMaincontentServiceService', () => {
  let service: UpdateprojectMaincontentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateprojectMaincontentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
