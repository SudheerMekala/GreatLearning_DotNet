import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojectHeaderComponent } from './createproject-header.component';

describe('CreateprojectHeaderComponent', () => {
  let component: CreateprojectHeaderComponent;
  let fixture: ComponentFixture<CreateprojectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojectHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
