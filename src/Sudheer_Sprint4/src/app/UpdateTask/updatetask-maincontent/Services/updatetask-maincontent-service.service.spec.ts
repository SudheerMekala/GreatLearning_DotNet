import { TestBed } from '@angular/core/testing';

import { UpdatetaskMaincontentServiceService } from './updatetask-maincontent-service.service';

describe('UpdatetaskMaincontentServiceService', () => {
  let service: UpdatetaskMaincontentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatetaskMaincontentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
