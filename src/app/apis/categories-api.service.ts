import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Category } from "../features/categories/interfaces/category.interface";
import { Observable } from "rxjs";
import { CategoryCreate } from "@categories/interfaces/category-create.interface";

@Injectable({ providedIn: "root" })
export class CategoriesApiService {
  private _http = inject(HttpClient);

  getCategories(): Observable<{ data: Category[] }> {
    return this._http.get<{ data: Category[] }>("/api/categories");
  }

  getCategoryById(categoryId: string) {
    return this._http.get(`/api/categories/${categoryId}`);
  }

  createCategory(body: {
    data: CategoryCreate;
  }): Observable<{ data: Category }> {
    return this._http.post<{ data: Category }>(`/api/categories`, body);
  }

  updateCategory(
    categoryId: string,
    body: { data: Category }
  ): Observable<{ data: Category }> {
    return this._http.put<{ data: Category }>(
      `/api/categories/${categoryId}`,
      body
    );
  }

  deleteCategory(categoryId: string): Observable<{ data: Category }> {
    return this._http.delete<{ data: Category }>(
      `/api/categories/${categoryId}`
    );
  }
}
