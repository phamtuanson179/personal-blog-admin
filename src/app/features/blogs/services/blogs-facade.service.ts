import { Injectable, inject } from "@angular/core";
import { Firestore, doc } from "@angular/fire/firestore";
import { BlogCreate } from "@blogs/interfaces/blog-create.interface";
import { BlogUpdate } from "@blogs/interfaces/blog-update.interface";
import { take } from "rxjs";
import { BlogsApiService } from "src/app/apis/blogs-api.service";
import { CategoriesApiService } from "src/app/apis/categories-api.service";

@Injectable({ providedIn: "root" })
export class BlogsFacadeService {
  private _blogsApi = inject(BlogsApiService);
  private _categoriesApi = inject(CategoriesApiService);
  private _fs = inject(Firestore);

  public getBlogs() {
    return this._blogsApi.getBlogs();
  }

  public getCategryById(blogId: string = "") {
    return this._blogsApi.getBlogById(blogId);
  }

  public createBlog(blog: BlogCreate) {
    return this._blogsApi.createBlog(blog);
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
}
