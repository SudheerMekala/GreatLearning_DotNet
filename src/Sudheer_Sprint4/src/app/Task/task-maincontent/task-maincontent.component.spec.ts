import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMaincontentComponent } from './task-maincontent.component';

describe('TaskMaincontentComponent', () => {
  let component: TaskMaincontentComponent;
  let fixture: ComponentFixture<TaskMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
