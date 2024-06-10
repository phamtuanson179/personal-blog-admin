import { Routes } from "@angular/router";
import { LayoutDefaultComponent } from "./shared/containers/components/layout-default/layout-default.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "categories",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutDefaultComponent,
    children: [
      {
        path: "categories",
        children: [
          {
            path: "",
            loadComponent: () =>
              import(
                "./pages/page-categories-container/page-categories-container.component"
              ).then((c) => c.PageCategoriesContainerComponent),
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("./pages/page-auth-login/page-auth-login.component").then(
            (c) => c.PageAuthLoginComponent
          ),
      },
      {
        path: "register",
        loadComponent: () =>
          import(
            "./pages/page-auth-register/page-auth-register.component"
          ).then((c) => c.PageAuthRegisterComponent),
      },
    ],
  },
];
