import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserSidebarComponent } from './updateuser-sidebar.component';

describe('UpdateuserSidebarComponent', () => {
  let component: UpdateuserSidebarComponent;
  let fixture: ComponentFixture<UpdateuserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
