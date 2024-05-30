import { Action, ActionReducer } from '@ngrx/store';
import { CategoriesEffects } from './features/categories/reducers/categories.effects';
import {
  categoriesReducer,
  CategoriesState,
} from './features/categories/reducers/categories.reducer';

export interface AppState {
  categoriesState: CategoriesState;
}

export interface AppStore {
  categories: ActionReducer<CategoriesState, Action>;
}

export const appStore: AppStore = {
  categories: categoriesReducer,
};

export const appEffects = [CategoriesEffects];
