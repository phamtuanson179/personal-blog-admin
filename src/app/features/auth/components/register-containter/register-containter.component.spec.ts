import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContainterComponent } from './register-containter.component';

describe('RegisterContainterComponent', () => {
  let component: RegisterContainterComponent;
  let fixture: ComponentFixture<RegisterContainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterContainterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterContainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
