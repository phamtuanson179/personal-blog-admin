import { Component } from "@angular/core";
import { RegisterContainterComponent } from "src/app/features/auth/components/register-containter/register-containter.component";

@Component({
  selector: "app-page-auth-register",
  standalone: true,
  imports: [RegisterContainterComponent],
  templateUrl: "./page-auth-register.component.html",
  styleUrl: "./page-auth-register.component.scss",
})
export class PageAuthRegisterComponent {}
