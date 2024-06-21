import { Component, inject } from "@angular/core";
import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@angular/fire/auth";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { from, of, switchMap } from "rxjs";
import { UsersFacadeService } from "src/app/features/users/services/user-facade.service";

@Component({
  selector: "app-login-form",
  standalone: true,
  imports: [
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    RouterModule,
  ],
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.scss",
})
export class LoginFormComponent {
  private _fb = inject(FormBuilder);
  private _auth = inject(Auth);
  private _usersFacade = inject(UsersFacadeService);
  loginForm = this._fb.group({
    email: this._fb.nonNullable.control("", [Validators.required]),
    password: this._fb.nonNullable.control("", [Validators.required]),
  });

  login() {
    const body = this.loginForm.getRawValue();
    from(signInWithEmailAndPassword(this._auth, body.email, body.password))
      .pipe(
        switchMap((res: UserCredential) => {
          console.log(res);

          return res.operationType == "signIn"
            ? this._usersFacade.createUser({ authUid: res.user.uid })
            : of(null);
        })
      )
      .subscribe((res) => {
        console.log({ res });
      });
  }
}
