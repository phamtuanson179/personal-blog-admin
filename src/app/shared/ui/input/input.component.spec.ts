import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  waitForAsync,
} from "@angular/core/testing";

import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, DebugElement, forwardRef } from "@angular/core";
import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { By } from "@angular/platform-browser";
import { InputComponent } from "./input.component";

describe("InputComponent", () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let el: DebugElement;
  let cdr: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent, FormsModule, ReactiveFormsModule, CommonModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => InputComponent),
          multi: true,
        },
        {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => InputComponent),
          multi: true,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    cdr = fixture.debugElement.injector.get(ChangeDetectorRef);
    el = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should disabled when control run disable", () => {
    component.control.disable();
    const input = el.query(By.css("input"));
    expect(input.nativeElement.disabled).toBeTruthy();
  });

  it("should show error when control invalid (validator: required)", waitForAsync(() => {
    component.control.addValidators(Validators.required);

    component.control.patchValue("");
    component.control.markAsTouched();

    cdr.detectChanges();

    fixture.whenStable().then(() => {
      const errorEl = el.query(By.css("p"));
      expect(errorEl).toBeTruthy();
    });
  }));
});
