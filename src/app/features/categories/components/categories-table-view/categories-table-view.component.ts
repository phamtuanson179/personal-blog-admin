import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import {
  selectCategoriesCategories,
  selectCategoriesLoading,
} from 'src/app/features/categories/reducers/categories.selectors';

@Component({
  selector: 'app-categories-table-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-table-view.component.html',
  styleUrl: './categories-table-view.component.scss',
})
export class CategoriesTableViewComponent {
  private _store = inject(Store<AppState>);
  loading$ = this._store.select(selectCategoriesLoading);
  categories$ = this._store.select(selectCategoriesCategories);
}
