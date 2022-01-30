import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectSidebarComponent } from './updateproject-sidebar.component';

describe('UpdateprojectSidebarComponent', () => {
  let component: UpdateprojectSidebarComponent;
  let fixture: ComponentFixture<UpdateprojectSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojectSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojectSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
