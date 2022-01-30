import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserHeaderComponent } from './createuser-header.component';

describe('CreateuserHeaderComponent', () => {
  let component: CreateuserHeaderComponent;
  let fixture: ComponentFixture<CreateuserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
