import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DefaultSidebarComponent } from "src/app/shared/containers/default-layout/components/default-sidebar/default-sidebar.component";

@Component({
  selector: "app-default",
  standalone: true,
  imports: [RouterOutlet, DefaultSidebarComponent],
  providers: [],
  templateUrl: "./default.component.html",
  styleUrl: "./default.component.scss",
})
export class DefaultComponent {}
