import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FirebaseApp } from "@angular/fire/app";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "@blogs/interfaces/blog.interface";
import { BlogsFacadeService } from "@blogs/services/blogs-facade.service";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor, EditorConfig } from "@ckeditor/ckeditor5-core";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzUploadFile, NzUploadModule } from "ng-zorro-antd/upload";
import { tap } from "rxjs";

@Component({
  selector: "app-blogs-update",
  standalone: true,
  imports: [
    NzCardModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    NzTagModule,
  ],
  templateUrl: "./blogs-update.component.html",
  styleUrl: "./blogs-update.component.scss",
})
export class BlogsUpdateComponent {
  private _fb = inject(FormBuilder);
  private _blogsFacade = inject(BlogsFacadeService);
  private _msg = inject(NzMessageService);
  private _fs = inject(FirebaseApp);
  private _activatedRoute = inject(ActivatedRoute);
  private _updatedElmId =
    this._activatedRoute.snapshot.paramMap.get("blogId") ?? "";
  public categories$ = this._blogsFacade.getCategories();
  public updatedElm$ = this._blogsFacade
    .getCategoryById(this._updatedElmId)
    .pipe(
      tap((res) => {
        console.log("====================================");
        console.log(res);
        console.log("====================================");
        this._blogsFacade.mapBlogToForm(res, this.form);
      })
    );

  loading = false;
  form = this._fb.group({
    title: this._fb.nonNullable.control("", [Validators.required]),
    summary: this._fb.nonNullable.control("", [Validators.required]),
    thumbnails: this._fb.nonNullable.control<NzUploadFile[]>(
      [],
      [Validators.required]
    ),
    content: this._fb.nonNullable.control("", [Validators.required]),
    categoryIds: this._fb.nonNullable.control<string[]>(
      [],
      [Validators.required]
    ),
    tags: this._fb.nonNullable.control<string[]>([], [Validators.required]),
  });

  public editor?: {
    create(
      sourceElementOrData: HTMLElement | string,
      config?: EditorConfig
    ): Promise<Editor>;
  } = ClassicEditor;

  update() {}

  handleChangeThumbnail(info: { file: NzUploadFile }) {
    console.log(info);
  }

  validateThumbnail = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    console.log("====================================");
    console.log(file);
    console.log("====================================");
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      this._msg.error("Chỉ hỗ trợ định dạng: jpeg, jpg, png!");
      return false;
    }

    const isLt2M = file.size! / 1024 / 1024 < 2;
    if (!isLt2M) {
      this._msg.error("File phải có dung lượng nhỏ hơn 2MB!");
      return false;
    }

    this.form.patchValue({ thumbnails: [file] });

    return false;
  };
}
