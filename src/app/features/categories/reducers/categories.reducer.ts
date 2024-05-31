import { createReducer, on } from "@ngrx/store";
import { Category } from "../interfaces/category.interface";
import { CategoriesAction } from "./categories.actions";

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string;
}

export const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: "",
};

export const categoriesReducer = createReducer(
  initialState,
  on(CategoriesAction["[Categories]LoadCategories"], (state) => ({
    ...state,
    loading: true,
  })),
  on(
    CategoriesAction["[Categories]LoadCategoriesFailure"],
    (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(
    CategoriesAction["[Categories]LoadCategoriesSuccess"],
    (state, { categories }) => ({
      ...state,
      loading: false,
      error: "",
      categories,
    })
  ),
  on(CategoriesAction["[Categories]CreateCategory"], (state, { category }) => ({
    ...state,
    categories: [...state.categories, category],
  })),
  on(
    CategoriesAction["[Categories]UpdateCategory"],
    (state, { categoryId, category }) => ({
      ...state,
      categories: state.categories.map((elm) =>
        elm.id == categoryId ? category : elm
      ),
    })
  ),
  on(
    CategoriesAction["[Categories]DeleteCategory"],
    (state, { categoryId }) => ({
      ...state,
      categories: state.categories.filter((elm) => elm.id != categoryId),
    })
  )
);
