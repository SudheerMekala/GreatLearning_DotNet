import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserFooterComponent } from './createuser-footer.component';

describe('CreateuserFooterComponent', () => {
  let component: CreateuserFooterComponent;
  let fixture: ComponentFixture<CreateuserFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
