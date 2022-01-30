import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserNavbarComponent } from './updateuser-navbar.component';

describe('UpdateuserNavbarComponent', () => {
  let component: UpdateuserNavbarComponent;
  let fixture: ComponentFixture<UpdateuserNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
