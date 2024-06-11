import { inject, Injectable } from "@angular/core";
import {
  addDoc,
  collection,
  collectionData,
  collectionSnapshots,
  deleteDoc,
  DocumentReference,
  Firestore,
  updateDoc,
} from "@angular/fire/firestore";
import { CategoryCreate } from "@categories/interfaces/category-create.interface";
import { CategoryUpdate } from "@categories/interfaces/category-update.interface";
import { from, map, Observable, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class CategoriesApiService {
  private _fireStore = inject(Firestore);
  private _categoriesCollection = collection(this._fireStore, "categories");

  getCategories(): Observable<any> {
    return collectionData(this._categoriesCollection, { idField: "id" }).pipe(
      tap((res) => {
        console.log("categories", res);
      })
    );
  }

  getCategoryById(categoryId: string) {
    return collectionData(this._categoriesCollection, {
      idField: categoryId,
    });
  }

  createCategory(body: CategoryCreate) {
    return from(addDoc(this._categoriesCollection, body));
  }

  updateCategory(doc: DocumentReference, body: CategoryUpdate) {
    return from(updateDoc(doc, body));
  }

  deleteCategory(doc: DocumentReference) {
    return from(deleteDoc(doc));
  }
}
