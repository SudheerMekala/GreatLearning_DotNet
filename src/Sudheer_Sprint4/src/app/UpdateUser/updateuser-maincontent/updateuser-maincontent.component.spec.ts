import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserMaincontentComponent } from './updateuser-maincontent.component';

describe('UpdateuserMaincontentComponent', () => {
  let component: UpdateuserMaincontentComponent;
  let fixture: ComponentFixture<UpdateuserMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
