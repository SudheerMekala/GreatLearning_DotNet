import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserNavbarComponent } from './createuser-navbar.component';

describe('CreateuserNavbarComponent', () => {
  let component: CreateuserNavbarComponent;
  let fixture: ComponentFixture<CreateuserNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
