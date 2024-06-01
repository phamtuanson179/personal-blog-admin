import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { FooterComponent } from "@containers/components/footer/footer.component";
import { HeaderComponent } from "@containers/components/header/header.component";
import { LayoutService } from "@containers/services/layout.service";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzIconModule } from "ng-zorro-antd/icon";
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent,
} from "ng-zorro-antd/layout";
import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzSubMenuComponent,
} from "ng-zorro-antd/menu";

@Component({
  selector: "app-layout-default",
  standalone: true,
  imports: [
    RouterOutlet,
    NzIconModule,
    NzBreadCrumbModule,
    NzLayoutComponent,
    NzContentComponent,
    NzFooterComponent,
    NzHeaderComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    NzSiderComponent,
    NzMenuDirective,
    NzSubMenuComponent,
    NzMenuItemComponent,
    RouterModule,
  ],
  templateUrl: "./layout-default.component.html",
  styleUrl: "./layout-default.component.scss",
})
export class LayoutDefaultComponent {
  private _layoutService = inject(LayoutService);

  public isSidebarCollapsed_ = computed(() =>
    this._layoutService.isSidebarCollapsed_()
  );

  toggleSidebarCollapsed() {
    this._layoutService.toggleSidebarCollapsed();
  }
}
