import { Component } from "@angular/core";
import { LoginContainerComponent } from "src/app/features/auth/components/login-container/login-container.component";

@Component({
  selector: "app-page-auth-login",
  standalone: true,
  imports: [LoginContainerComponent],
  templateUrl: "./page-auth-login.component.html",
  styleUrl: "./page-auth-login.component.scss",
})
export class PageAuthLoginComponent {}
