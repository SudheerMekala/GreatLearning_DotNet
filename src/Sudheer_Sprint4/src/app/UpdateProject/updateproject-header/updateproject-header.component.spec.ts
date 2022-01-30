import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectHeaderComponent } from './updateproject-header.component';

describe('UpdateprojectHeaderComponent', () => {
  let component: UpdateprojectHeaderComponent;
  let fixture: ComponentFixture<UpdateprojectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojectHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
