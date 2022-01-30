import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectNavbarComponent } from './updateproject-navbar.component';

describe('UpdateprojectNavbarComponent', () => {
  let component: UpdateprojectNavbarComponent;
  let fixture: ComponentFixture<UpdateprojectNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojectNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojectNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
