import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskMaincontentComponent } from './createtask-maincontent.component';

describe('CreatetaskMaincontentComponent', () => {
  let component: CreatetaskMaincontentComponent;
  let fixture: ComponentFixture<CreatetaskMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaskMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
