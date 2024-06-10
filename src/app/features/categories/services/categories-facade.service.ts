import { Injectable, inject } from "@angular/core";
import { Firestore, doc } from "@angular/fire/firestore";
import { CategoryCreate } from "@categories/interfaces/category-create.interface";
import { CategoryUpdate } from "@categories/interfaces/category-update.interface";
import { CategoriesApiService } from "src/app/apis/categories-api.service";

@Injectable({ providedIn: "root" })
export class CategoriesFacadeService {
  private _categoriesApi = inject(CategoriesApiService);
  private _fs = inject(Firestore);

  public getCategories() {
    return this._categoriesApi.getCategories();
  }

  public getCategryById(categoryId: string = "") {
    return this._categoriesApi.getCategoryById(categoryId);
  }

  public createCategory(category: CategoryCreate) {
    return this._categoriesApi.createCategory(category);
  }

  public updateCategory(categoryId: string = "", category: CategoryUpdate) {
    const categoryDocRef = doc(this._fs, "categories", categoryId);
    return this._categoriesApi.updateCategory(categoryDocRef, category);
  }

  public deleteCategory(categoryId: string = "") {
    const categoryDocRef = doc(this._fs, "categories", categoryId);
    return this._categoriesApi.deleteCategory(categoryDocRef);
  }
}
