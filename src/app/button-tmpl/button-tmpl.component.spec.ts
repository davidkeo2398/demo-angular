import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTmplComponent } from './button-tmpl.component';

describe('ButtonTmplComponent', () => {
  let component: ButtonTmplComponent;
  let fixture: ComponentFixture<ButtonTmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTmplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
