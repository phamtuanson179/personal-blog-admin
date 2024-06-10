import { Component } from "@angular/core";
import { NzCardModule } from "ng-zorro-antd/card";
import { LoginFormComponent } from "src/app/features/auth/components/login-form/login-form.component";
import { LoginSsoComponent } from "src/app/features/auth/components/login-sso/login-sso.component";

@Component({
  selector: "app-login-container",
  standalone: true,
  imports: [NzCardModule, LoginFormComponent, LoginSsoComponent],
  templateUrl: "./login-container.component.html",
  styleUrl: "./login-container.component.scss",
})
export class LoginContainerComponent {}
