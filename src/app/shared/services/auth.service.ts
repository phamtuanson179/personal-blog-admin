import { Injectable, effect, inject, signal } from "@angular/core";
import {
  Auth,
  GoogleAuthProvider,
  User,
  UserCredential,
  getAdditionalUserInfo,
  signInWithPopup,
  signOut,
} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { UsersFacadeService } from "@users/services/user-facade.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { delay, from, of, switchMap, take, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private _auth = inject(Auth);
  private _router = inject(Router);
  private _message = inject(NzMessageService);

  public _authInfo = signal<User | undefined | null>(undefined);
  private _usersFacade = inject(UsersFacadeService);

  constructor() {
    this._auth.onAuthStateChanged((user) => {
      this._authInfo.set(user);
      // if (user) {

      // this._usersFacade.getUserById(user)
      // }
    });
  }

  public getCurrentUserUid() {
    return this._auth.currentUser?.uid;
  }

  public loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    from(signInWithPopup(this._auth, provider))
      .pipe(
        take(1),
        switchMap((res: UserCredential) => {
          return getAdditionalUserInfo(res)?.isNewUser
            ? this._usersFacade.createUser({
                authUid: res.user.uid,
                avatarFileId: res.user.photoURL ?? "",
                name: res.user.displayName ?? "",
                email: res.user.email ?? "",
              })
            : of(null);
        }),
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

  public isLogin() {}
}
