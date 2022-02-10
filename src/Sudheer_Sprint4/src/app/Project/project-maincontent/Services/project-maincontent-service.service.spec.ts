import { TestBed } from '@angular/core/testing';

import { ProjectMaincontentServiceService } from './project-maincontent-service.service';

describe('ProjectMaincontentServiceService', () => {
  let service: ProjectMaincontentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMaincontentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
