import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserFooterComponent } from './updateuser-footer.component';

describe('UpdateuserFooterComponent', () => {
  let component: UpdateuserFooterComponent;
  let fixture: ComponentFixture<UpdateuserFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
