import { inject, Injectable } from "@angular/core";
import {
  getBlob,
  ref,
  Storage,
  uploadBytes,
  uploadString,
} from "@angular/fire/storage";
import { from } from "rxjs";

@Injectable({ providedIn: "root" })
export class StorageApiService {
  private _storage = inject(Storage);

  getFileById(fileId: string = "", folder?: string) {
    const url = [folder, fileId]?.filter((i) => !!i).join("/");
    return from(getBlob(ref(this._storage, url)));
  }

  uploadImage(file: File, fileId: string, folder?: string) {
    const url = [folder, fileId]?.filter((i) => !!i).join("/");
    return from(uploadBytes(ref(this._storage, url), file));
  }

  uploadMarkdown(value: string, fileId: string, folder?: string) {
    const url = [folder, fileId]?.filter((i) => !!i).join("/");
    return from(uploadString(ref(this._storage, url), value));
  }
}
