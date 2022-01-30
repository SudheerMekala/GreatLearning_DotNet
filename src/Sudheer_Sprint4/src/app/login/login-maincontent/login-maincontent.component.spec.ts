import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMaincontentComponent } from './login-maincontent.component';

describe('LoginMaincontentComponent', () => {
  let component: LoginMaincontentComponent;
  let fixture: ComponentFixture<LoginMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
