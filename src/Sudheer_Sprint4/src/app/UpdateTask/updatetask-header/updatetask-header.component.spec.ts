import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskHeaderComponent } from './updatetask-header.component';

describe('UpdatetaskHeaderComponent', () => {
  let component: UpdatetaskHeaderComponent;
  let fixture: ComponentFixture<UpdatetaskHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
