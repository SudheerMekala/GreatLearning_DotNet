import { TestBed } from '@angular/core/testing';

import { CreateprojectMaincontentServiceService } from './createproject-maincontent-service.service';

describe('CreateprojectMaincontentServiceService', () => {
  let service: CreateprojectMaincontentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateprojectMaincontentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
