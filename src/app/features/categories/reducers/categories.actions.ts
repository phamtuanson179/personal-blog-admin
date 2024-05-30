import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Category } from '../interfaces/category.interface';

export const CategoriesAction = createActionGroup({
  source: 'Categories',
  events: {
    '[Categories] Load Categories': emptyProps(),
    '[Categories] Load Categories Success': props<{ categories: Category[] }>(),
    '[Categories] Load Categories Failure': props<{ error: string }>(),
    '[Categories] Create Category': props<{ category: Category }>(),
    '[Categories] Update Category': props<{
      categoryId: string;
      category: Category;
    }>(),
    '[Categories] Delete Category': props<{ categoryId: string }>(),
  },
});
