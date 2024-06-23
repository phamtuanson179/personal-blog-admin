import { Routes } from "@angular/router";
import { LayoutDefaultComponent } from "./shared/containers/components/layout-default/layout-default.component";
import { isLoggedGuard } from "src/app/core/guards/is-logged.guard";
import { isNotLoggedGuard } from "src/app/core/guards/is-not-logged.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "categories",
    pathMatch: "full",
  },
  {
    path: "auth",
    canActivate: [isNotLoggedGuard],
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
  {
    path: "",
    component: LayoutDefaultComponent,
    canActivate: [isLoggedGuard],
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
      {
        path: "blogs",
        children: [
          {
            path: "",
            loadComponent: () =>
              import(
                "./pages/page-blogs-container/page-blogs-container.component"
              ).then((c) => c.PageBlogsContainerComponent),
          },
          {
            path: "create",
            loadComponent: () =>
              import(
                "./pages/page-blogs-create/page-blogs-create.component"
              ).then((c) => c.PageBlogsCreateComponent),
          },
          {
            path: "update/:blogId",
            loadComponent: () =>
              import(
                "./pages/page-blogs-update/page-blogs-update.component"
              ).then((c) => c.PageBlogsUpdateComponent),
          },
          {
            path: "detail/:blogId",
            loadComponent: () =>
              import(
                "./pages/page-blogs-detail/page-blogs-detail.component"
              ).then((c) => c.PageBlogsDetailComponent),
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            path: "",
            loadComponent: () =>
              import(
                "./pages/page-users-container/page-users-container.component"
              ).then((c) => c.PageUsersContainerComponent),
          },
        ],
      },
    ],
  },
];
