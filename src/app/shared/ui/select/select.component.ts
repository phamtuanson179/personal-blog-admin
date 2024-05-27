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
  selector: "app-select",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, Validator {
  name = input<string>("");
  placeholder = input<string>("");
  ngClass = input<string | object>("");
  options = input<{ value: ValueType; view: string; default: boolean }[]>([]);

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

type ValueType = string | null | number;
