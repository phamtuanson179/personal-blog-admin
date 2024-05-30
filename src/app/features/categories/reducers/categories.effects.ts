import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CategoriesApiService } from '../../../apis/categories-api.service';
import { CategoriesAction } from './categories.actions';

@Injectable()
export class CategoriesEffects {
  private _categoriesApi = inject(CategoriesApiService);
  private _actions = inject(Actions);

  loadCategories$ = createEffect(() =>
    this._actions.pipe(
      ofType(CategoriesAction['[Categories]LoadCategories']),
      mergeMap(() => this._categoriesApi.getCategories()),
      map((res) => res.data),
      map((categories) => {
        return CategoriesAction['[Categories]LoadCategoriesSuccess']({
          categories,
        });
      }),
      catchError((error) =>
        of(
          CategoriesAction['[Categories]LoadCategoriesFailure']({
            error: error.message,
          })
        )
      )
    )
  );
}
