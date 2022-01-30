import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojectFooterComponent } from './updateproject-footer.component';

describe('UpdateprojectFooterComponent', () => {
  let component: UpdateprojectFooterComponent;
  let fixture: ComponentFixture<UpdateprojectFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojectFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
