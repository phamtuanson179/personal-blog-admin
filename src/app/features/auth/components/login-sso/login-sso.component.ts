import { Component, inject } from "@angular/core";
import { AuthService } from "@shared-services/auth.service";
import { NzIconModule } from "ng-zorro-antd/icon";

@Component({
  selector: "app-login-sso",
  standalone: true,
  imports: [NzIconModule],
  templateUrl: "./login-sso.component.html",
  styleUrl: "./login-sso.component.scss",
})
export class LoginSsoComponent {
  private _authService = inject(AuthService);

  loginWithGoogle() {
    this._authService.loginWithGoogle();
  }
}
