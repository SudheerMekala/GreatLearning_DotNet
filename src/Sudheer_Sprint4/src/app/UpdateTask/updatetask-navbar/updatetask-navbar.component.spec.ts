import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskNavbarComponent } from './updatetask-navbar.component';

describe('UpdatetaskNavbarComponent', () => {
  let component: UpdatetaskNavbarComponent;
  let fixture: ComponentFixture<UpdatetaskNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
