import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskNavbarComponent } from './createtask-navbar.component';

describe('CreatetaskNavbarComponent', () => {
  let component: CreatetaskNavbarComponent;
  let fixture: ComponentFixture<CreatetaskNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaskNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
