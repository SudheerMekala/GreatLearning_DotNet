import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserHeaderComponent } from './updateuser-header.component';

describe('UpdateuserHeaderComponent', () => {
  let component: UpdateuserHeaderComponent;
  let fixture: ComponentFixture<UpdateuserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
