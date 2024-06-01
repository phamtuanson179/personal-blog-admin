import { Component } from "@angular/core";
import { NzFooterComponent } from "ng-zorro-antd/layout";

@Component({
  selector: "[appFooter]",
  standalone: true,
  imports: [NzFooterComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {}
