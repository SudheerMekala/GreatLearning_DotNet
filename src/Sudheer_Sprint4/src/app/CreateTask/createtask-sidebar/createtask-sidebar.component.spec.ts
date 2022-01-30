import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskSidebarComponent } from './createtask-sidebar.component';

describe('CreatetaskSidebarComponent', () => {
  let component: CreatetaskSidebarComponent;
  let fixture: ComponentFixture<CreatetaskSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaskSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
