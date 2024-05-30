import { Routes } from '@angular/router';
import { LayoutDefaultComponent } from './shared/containers/layout-default/layout-default.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/page-categories-container/page-categories-container.component'
              ).then((c) => c.PageCategoriesContainerComponent),
          },
        ],
      },
    ],
  },
];
