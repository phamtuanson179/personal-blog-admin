import { Injectable, inject } from "@angular/core";
import {
  DocumentReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  updateDoc,
} from "@angular/fire/firestore";
import { Observable, from, tap } from "rxjs";
import { UserCreate } from "src/app/features/users/interfaces/user-create.interface";
import { UserUpdate } from "src/app/features/users/interfaces/user-update.interface";

@Injectable({ providedIn: "root" })
export class UsersApiService {
  private _fireStore = inject(Firestore);
  private _usersCollection = collection(this._fireStore, "users");

  getUsers(): Observable<any> {
    return collectionData(this._usersCollection, { idField: "id" }).pipe(
      tap((res) => {
        console.log("users", res);
      })
    );
  }

  getUserById(userId: string) {
    return collectionData(this._usersCollection, {
      idField: userId,
    });
  }

  createUser(body: UserCreate) {
    return from(addDoc(this._usersCollection, body));
  }

  updateUser(doc: DocumentReference, body: UserUpdate) {
    return from(updateDoc(doc, body));
  }

  deleteUser(doc: DocumentReference) {
    return from(deleteDoc(doc));
  }
}
