import { Component, computed, inject } from "@angular/core";
import { LayoutService } from "@containers/services/layout.service";
import { AuthService } from "@shared-services/auth.service";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzHeaderComponent } from "ng-zorro-antd/layout";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NzIconModule, NzHeaderComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  private _layoutService = inject(LayoutService);
  private _authService = inject(AuthService);

  public isSidebarCollapsed_ = computed(() =>
    this._layoutService.isSidebarCollapsed_()
  );

  toggleSidebarCollapsed() {
    this._layoutService.toggleSidebarCollapsed();
  }

  logout() {
    this._authService.logout();
  }
}
