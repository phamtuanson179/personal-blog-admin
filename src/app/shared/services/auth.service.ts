import { Injectable, inject } from "@angular/core";
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { delay, from, mergeMap, take, tap, timer } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private _auth = inject(Auth);
  private _router = inject(Router);
  private _message = inject(NzMessageService);

  public getCurrentUserUid() {
    return this._auth.currentUser?.uid;
  }

  public loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    from(signInWithPopup(this._auth, provider))
      .pipe(
        take(1),
        tap(() => this._message.success("Đăng nhập thành công!")),
        delay(1000)
      )
      .subscribe(() => this._router.navigate(["categories"]));
  }

  public logout() {
    from(signOut(this._auth))
      .pipe(
        take(1),
        tap(() => this._message.success("Đăng xuất thành công!")),
        delay(1000)
      )
      .subscribe(() => this._router.navigate(["auth", "login"]));
  }
}
