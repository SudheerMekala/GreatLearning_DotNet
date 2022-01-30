import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojectMaincontentComponent } from './createproject-maincontent.component';

describe('CreateprojectMaincontentComponent', () => {
  let component: CreateprojectMaincontentComponent;
  let fixture: ComponentFixture<CreateprojectMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojectMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojectMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
