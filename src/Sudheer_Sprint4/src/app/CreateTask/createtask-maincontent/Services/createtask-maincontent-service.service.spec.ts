import { TestBed } from '@angular/core/testing';

import { CreatetaskMaincontentServiceService } from './createtask-maincontent-service.service';

describe('CreatetaskMaincontentServiceService', () => {
  let service: CreatetaskMaincontentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatetaskMaincontentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
