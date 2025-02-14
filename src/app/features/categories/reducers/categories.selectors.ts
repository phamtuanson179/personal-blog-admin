import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { CategoriesState } from 'src/app/features/categories/reducers/categories.reducer';

export const selectCategories = (state: AppState) => state.categoriesState;

export const selectCategoriesCategories = createSelector(
  selectCategories,
  (state: CategoriesState) => {
    console.log('====================================');
    console.log(state);
    console.log('====================================');
    return state.categories;
  }
);

export const selectCategoriesLoading = createSelector(
  selectCategories,
  (state: CategoriesState) => state.loading
);

export const selectCategoriesError = createSelector(
  selectCategories,
  (state: CategoriesState) => state.error
);
