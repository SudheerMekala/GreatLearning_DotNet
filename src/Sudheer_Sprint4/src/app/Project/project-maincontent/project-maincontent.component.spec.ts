import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaincontentComponent } from './project-maincontent.component';

describe('ProjectMaincontentComponent', () => {
  let component: ProjectMaincontentComponent;
  let fixture: ComponentFixture<ProjectMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
