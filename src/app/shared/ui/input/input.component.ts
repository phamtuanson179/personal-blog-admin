import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  input,
} from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
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
})
export class InputComponent implements ControlValueAccessor, Validator {
  type = input<INPUT_TYPE>(INPUT_TYPE.text);
  name = input<string>("");
  placeholder = input<string>("");
  ngClass = input<string | object>("");

  control = new FormControl<ValueType>("");

  onChange!: (value: ValueType) => void;
  onTouched!: () => void;
  onValidatorChange!: () => void;

  constructor(private cdr: ChangeDetectorRef) {}

  //override
  validate(
    control: AbstractControl<unknown, unknown>
  ): ValidationErrors | null {
    return control?.errors;
  }

  //override
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  //override
  writeValue(value: ValueType): void {
    this.control.setValue(value);
  }

  //override
  registerOnChange(fn: (value: ValueType) => void): void {
    this.onChange = fn;
  }

  //override
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  //override
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDisabledState?(_: boolean): void {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeInput(e: any) {
    const value = e?.target.value;
    this.control.setValue(value);
    this?.onChange(value);
  }
}

export enum INPUT_TYPE {
  text = "text",
  number = "number",
  email = "email",
}

type ValueType = string | null | number;
