import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserSidebarComponent } from './createuser-sidebar.component';

describe('CreateuserSidebarComponent', () => {
  let component: CreateuserSidebarComponent;
  let fixture: ComponentFixture<CreateuserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
