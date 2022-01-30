import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojectSidebarComponent } from './createproject-sidebar.component';

describe('CreateprojectSidebarComponent', () => {
  let component: CreateprojectSidebarComponent;
  let fixture: ComponentFixture<CreateprojectSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojectSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojectSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
