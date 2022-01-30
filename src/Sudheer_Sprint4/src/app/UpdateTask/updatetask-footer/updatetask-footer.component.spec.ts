import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskFooterComponent } from './updatetask-footer.component';

describe('UpdatetaskFooterComponent', () => {
  let component: UpdatetaskFooterComponent;
  let fixture: ComponentFixture<UpdatetaskFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
