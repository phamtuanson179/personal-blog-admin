import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { SOCIALS } from "src/app/shared/constants/socials";

@Component({
  selector: "app-default-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./default-footer.component.html",
  styleUrl: "./default-footer.component.scss",
})
export class DefaultFooterComponent {
  private _dom = inject(DomSanitizer);

  public SOCIALS = SOCIALS.map((i) => ({
    ...i,
    logo: this._dom.bypassSecurityTrustHtml(i.logo),
  }));
}
