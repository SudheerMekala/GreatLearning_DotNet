import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskFooterComponent } from './createtask-footer.component';

describe('CreatetaskFooterComponent', () => {
  let component: CreatetaskFooterComponent;
  let fixture: ComponentFixture<CreatetaskFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaskFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
