import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserMaincontentComponent } from './createuser-maincontent.component';

describe('CreateuserMaincontentComponent', () => {
  let component: CreateuserMaincontentComponent;
  let fixture: ComponentFixture<CreateuserMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
