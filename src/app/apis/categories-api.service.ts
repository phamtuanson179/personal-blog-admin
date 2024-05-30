import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../features/categories/interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoriesApiService {
  private _http = inject(HttpClient);

  getCategories(): Observable<{ data: Category[] }> {
    return this._http.get<{ data: Category[] }>('/api/categories');
  }

  getCategoryById(categoryId: string) {
    return this._http.get(`/api/categories/${categoryId}`);
  }

  createCategory(body: { data: Category }) {
    return this._http.post(`/api/categories`, body);
  }

  updateCategory(categoryId: string, body: { data: Category }) {
    return this._http.put(`/api/categories/${categoryId}`, body);
  }

  deleteCategory(categoryId: string) {
    return this._http.delete(`/api/categories/${categoryId}`);
  }
}
