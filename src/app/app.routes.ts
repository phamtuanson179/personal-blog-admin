import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/default/default.component").then(
        (c) => c.DefaultComponent
      ),
  },
];
