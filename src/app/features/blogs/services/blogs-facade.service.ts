import { Location } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import { Firestore, doc } from "@angular/fire/firestore";
import { FormGroup } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { BlogCreate } from "@blogs/interfaces/blog-create.interface";
import { BlogUpdate } from "@blogs/interfaces/blog-update.interface";
import { Blog } from "@blogs/interfaces/blog.interface";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzUploadFile } from "ng-zorro-antd/upload";
import {
  combineLatest,
  from,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { BlogsApiService } from "src/app/apis/blogs-api.service";
import { CategoriesApiService } from "src/app/apis/categories-api.service";
import { StorageApiService } from "src/app/apis/storage-api.service";

@Injectable({ providedIn: "root" })
export class BlogsFacadeService {
  private _blogsApi = inject(BlogsApiService);
  private _categoriesApi = inject(CategoriesApiService);
  private _storageApi = inject(StorageApiService);
  private _fs = inject(Firestore);
  private _msg = inject(NzMessageService);
  private _location = inject(Location);
  private _dom = inject(DomSanitizer);

  public getBlogs() {
    return this._blogsApi.getBlogs();
  }

  public getCategoryById(blogId: string = "") {
    const blogDocRef = doc(this._fs, "blogs", blogId);
    return this._blogsApi
      .getBlogById(blogDocRef)
      .pipe(map((res) => ({ ...res.data(), id: res.id }) as Blog));
  }

  public createBlog(
    blog: BlogCreate & { thumbnails: NzUploadFile[]; content: string }
  ) {
    const { thumbnails, content, ...body } = blog;
    return this._blogsApi.createBlog(body).pipe(
      mergeMap((res) => {
        return combineLatest({
          blog: of(res),
          thumbnailFile: this._storageApi.uploadImage(
            blog.thumbnails[0] as any,
            "thumbnail.jpeg",
            res.id
          ),
          contentFile: this._storageApi.uploadMarkdown(
            blog.content,
            "content.md",
            res.id
          ),
        });
      }),
      mergeMap(({ blog, thumbnailFile, contentFile }) => {
        return this.updateBlog(blog.id, {
          thumbnailFileId: thumbnailFile.metadata.name,
          contentFileId: contentFile.metadata.name,
        });
      }),
      tap(() => {
        this._msg.success("Thêm mới blog thành công!");
        this.back();
      })
    );
  }

  public updateBlog(blogId: string = "", blog: BlogUpdate) {
    const blogDocRef = doc(this._fs, "blogs", blogId);
    return this._blogsApi.updateBlog(blogDocRef, blog);
  }

  public deleteBlog(blogId: string = "") {
    const blogDocRef = doc(this._fs, "blogs", blogId);
    return this._blogsApi.deleteBlog(blogDocRef);
  }

  public getCategories() {
    return this._categoriesApi.getCategories().pipe(take(1));
  }

  public mapBlogToForm(blog: Blog, form: FormGroup) {
    combineLatest({
      thumbnail: this._getThumbnailFile(blog.thumbnailFileId, blog.id),
      content: this._getContentFile(blog.contentFileId, blog.id),
    }).subscribe(({ thumbnail, content }) => {
      form.patchValue({ thumbnails: [thumbnail], ...blog, content });
    });
  }

  public back() {
    this._location.back();
  }

  private _getThumbnailFile(thumbnailFileId: string = "", blogId: string) {
    return this._storageApi.getFileById(thumbnailFileId, blogId).pipe(
      map((blob) => {
        const thumbnailFile = new File([blob], "thumbnail.jpeg");
        return thumbnailFile;
      })
    );
  }

  private _getContentFile(contentFileId: string = "", blogId: string) {
    return this._storageApi.getFileById(contentFileId, blogId).pipe(
      switchMap((blob) => {
        return this._blobToString(blob);
      })
    );
  }

  private _blobToString(blob: Blob) {
    let url = URL.createObjectURL(blob);
    return from(fetch(url).then((res) => res.text()));
  }
}
