import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojectNavbarComponent } from './createproject-navbar.component';

describe('CreateprojectNavbarComponent', () => {
  let component: CreateprojectNavbarComponent;
  let fixture: ComponentFixture<CreateprojectNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojectNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojectNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
