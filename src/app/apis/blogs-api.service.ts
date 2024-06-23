import { inject, Injectable } from "@angular/core";
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  DocumentReference,
  Firestore,
  getDoc,
  getDocs,
  updateDoc,
} from "@angular/fire/firestore";
import { BlogCreate } from "@blogs/interfaces/blog-create.interface";
import { BlogUpdate } from "@blogs/interfaces/blog-update.interface";
import { from, Observable, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class BlogsApiService {
  private _fireStore = inject(Firestore);
  private _blogsCollection = collection(this._fireStore, "blogs");

  getBlogs(): Observable<any> {
    return collectionData(this._blogsCollection, { idField: "id" });
  }

  getBlogById(doc: DocumentReference) {
    return from(getDoc(doc));
  }

  createBlog(body: BlogCreate) {
    return from(addDoc(this._blogsCollection, body));
  }

  updateBlog(doc: DocumentReference, body: BlogUpdate) {
    return from(updateDoc(doc, body));
  }

  deleteBlog(doc: DocumentReference) {
    return from(deleteDoc(doc));
  }
}
