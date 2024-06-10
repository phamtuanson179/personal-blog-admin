import { Component, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageService } from "ng-zorro-antd/message";
import { from } from "rxjs";

@Component({
  selector: "app-register-form",
  standalone: true,
  imports: [NzFormModule, FormsModule, ReactiveFormsModule, NzInputModule],
  templateUrl: "./register-form.component.html",
  styleUrl: "./register-form.component.scss",
})
export class RegisterFormComponent {
  private _message = inject(NzMessageService);
  private _router = inject(Router);
  private _fb = inject(FormBuilder);
  private _auth = inject(Auth);
  registerForm = this._fb.group({
    email: this._fb.nonNullable.control("", [Validators.required]),
    password: this._fb.nonNullable.control("", [Validators.required]),
  });

  submit() {
    const body = this.registerForm.getRawValue();
    from(
      createUserWithEmailAndPassword(this._auth, body.email, body.password)
    ).subscribe(() => {
      this._message.success("Done");
      this._router.navigate(["/auth", "login"]);
    });
  }
}
