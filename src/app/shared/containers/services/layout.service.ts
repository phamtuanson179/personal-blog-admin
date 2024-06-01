import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LayoutService {
  isSidebarCollapsed_ = signal(false);

  public toggleSidebarCollapsed() {
    this.isSidebarCollapsed_.set(!this.isSidebarCollapsed_());
  }
}
