import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojectFooterComponent } from './createproject-footer.component';

describe('CreateprojectFooterComponent', () => {
  let component: CreateprojectFooterComponent;
  let fixture: ComponentFixture<CreateprojectFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprojectFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
