import { TestBed } from '@angular/core/testing';

import { TaskMaincontentServiceService } from './task-maincontent-service.service';

describe('TaskMaincontentServiceService', () => {
  let service: TaskMaincontentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskMaincontentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
