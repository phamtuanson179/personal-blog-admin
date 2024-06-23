import { Injectable, inject } from "@angular/core";
import { Firestore, doc } from "@angular/fire/firestore";
import { UsersApiService } from "src/app/apis/users-api.service";
import { UserCreate } from "src/app/features/users/interfaces/user-create.interface";
import { UserUpdate } from "src/app/features/users/interfaces/user-update.interface";

@Injectable({ providedIn: "root" })
export class UsersFacadeService {
  private _usersApi = inject(UsersApiService);
  private _fs = inject(Firestore);

  public getUsers() {
    return this._usersApi.getUsers();
  }

  public getUserById(userId: string = "") {
    return this._usersApi.getUserById(userId);
  }

  public createUser(user: UserCreate) {
    return this._usersApi.createUser(user);
  }

  public updateUser(userId: string = "", user: UserUpdate) {
    const userDocRef = doc(this._fs, "users", userId);
    return this._usersApi.updateUser(userDocRef, user);
  }

  public deleteUser(userId: string = "") {
    const userDocRef = doc(this._fs, "users", userId);
    return this._usersApi.deleteUser(userDocRef);
  }
}
