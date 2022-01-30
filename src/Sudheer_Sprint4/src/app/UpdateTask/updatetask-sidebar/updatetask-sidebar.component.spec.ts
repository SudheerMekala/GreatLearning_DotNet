import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskSidebarComponent } from './updatetask-sidebar.component';

describe('UpdatetaskSidebarComponent', () => {
  let component: UpdatetaskSidebarComponent;
  let fixture: ComponentFixture<UpdatetaskSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
