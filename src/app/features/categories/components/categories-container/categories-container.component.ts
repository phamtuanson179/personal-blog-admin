import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import {
  selectCategoriesCategories,
  selectCategoriesLoading,
} from 'src/app/features/categories/reducers/categories.selectors';
import { CategoriesFilterComponent } from '../categories-filter/categories-filter.component';
import { CategoriesTableViewComponent } from '../categories-table-view/categories-table-view.component';
import { CategoriesAction } from 'src/app/features/categories/reducers/categories.actions';

@Component({
  selector: 'app-categories-container',
  standalone: true,
  imports: [CategoriesTableViewComponent, CategoriesFilterComponent],
  templateUrl: './categories-container.component.html',
  styleUrl: './categories-container.component.scss',
})
export class CategoriesContainerComponent {
  private _store = inject(Store<AppState>);

  constructor() {
    this._store.dispatch(CategoriesAction['[Categories]LoadCategories']());
  }
}
