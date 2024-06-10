import { Component } from "@angular/core";
import { NzCardModule } from "ng-zorro-antd/card";
import { RegisterFormComponent } from "src/app/features/auth/components/register-form/register-form.component";

@Component({
  selector: "app-register-containter",
  standalone: true,
  imports: [RegisterFormComponent, NzCardModule],
  templateUrl: "./register-containter.component.html",
  styleUrl: "./register-containter.component.scss",
})
export class RegisterContainterComponent {}
