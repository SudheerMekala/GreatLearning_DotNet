import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectMaincontentComponent } from './updateproject-maincontent.component';

describe('UpdateprojectMaincontentComponent', () => {
  let component: UpdateprojectMaincontentComponent;
  let fixture: ComponentFixture<UpdateprojectMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojectMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojectMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
