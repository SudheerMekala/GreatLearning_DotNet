import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMaincontentComponent } from './user-maincontent.component';

describe('UserMaincontentComponent', () => {
  let component: UserMaincontentComponent;
  let fixture: ComponentFixture<UserMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
