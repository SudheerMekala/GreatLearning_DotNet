import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskMaincontentComponent } from './updatetask-maincontent.component';

describe('UpdatetaskMaincontentComponent', () => {
  let component: UpdatetaskMaincontentComponent;
  let fixture: ComponentFixture<UpdatetaskMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
