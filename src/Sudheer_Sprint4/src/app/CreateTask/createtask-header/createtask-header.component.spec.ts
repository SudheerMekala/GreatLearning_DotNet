import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskHeaderComponent } from './createtask-header.component';

describe('CreatetaskHeaderComponent', () => {
  let component: CreatetaskHeaderComponent;
  let fixture: ComponentFixture<CreatetaskHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaskHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
