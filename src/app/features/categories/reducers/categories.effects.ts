import { inject, Injectable } from "@angular/core";
import { CategoryCreate } from "@categories/interfaces/category-create.interface";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { CategoriesApiService } from "../../../apis/categories-api.service";
import { CategoriesAction } from "./categories.actions";

@Injectable()
export class CategoriesEffects {
  private _categoriesApi = inject(CategoriesApiService);
  private _actions$ = inject(Actions);

  loadCategories$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CategoriesAction["[Categories]LoadCategories"]),
      mergeMap(() => this._categoriesApi.getCategories()),
      map((res) => res.data),
      map((categories) => {
        return CategoriesAction["[Categories]LoadCategoriesSuccess"]({
          categories,
        });
      }),
      catchError((error) =>
        of(
          CategoriesAction["[Categories]LoadCategoriesFailure"]({
            error: error.message,
          })
        )
      )
    )
  );

  createCategory$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CategoriesAction["[Categories]CreateCategory"]),
      mergeMap((action) =>
        this._categoriesApi.createCategory({ data: action.categoryCreate })
      ),
      tap(() => {
        return CategoriesAction["[Categories]LoadCategories"];
      })
    )
  );
}
