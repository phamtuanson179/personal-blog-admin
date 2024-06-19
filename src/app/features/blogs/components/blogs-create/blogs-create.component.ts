import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BlogsFacadeService } from "@blogs/services/blogs-facade.service";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { EditorConfig, Editor } from "@ckeditor/ckeditor5-core";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Markdown } from "@ckeditor/ckeditor5-markdown-gfm";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzUploadFile, NzUploadModule } from "ng-zorro-antd/upload";
import { saveAs } from "file-saver";
import { writeFile } from "fs";
import {
  getStorage,
  ref,
  Storage,
  uploadBytes,
  uploadString,
} from "@angular/fire/storage";
import { FirebaseApp } from "@angular/fire/app";
import { BlogCreate } from "@blogs/interfaces/blog-create.interface";
import { AuthService } from "@shared-services/auth.service";
import { combineLatest, from, mergeMap, of, switchMap } from "rxjs";

@Component({
  selector: "app-blogs-create",
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
  templateUrl: "./blogs-create.component.html",
  styleUrl: "./blogs-create.component.scss",
})
export class BlogsCreateComponent implements AfterViewInit {
  private _fb = inject(FormBuilder);
  private _blogsFacade = inject(BlogsFacadeService);
  private _msg = inject(NzMessageService);
  private _fs = inject(FirebaseApp);
  private _authService = inject(AuthService);
  loading = false;
  form = this._fb.group({
    title: this._fb.nonNullable.control("", [Validators.required]),
    summary: this._fb.nonNullable.control("", [Validators.required]),
    thumbnails: this._fb.nonNullable.control<NzUploadFile[]>(
      [],
      [Validators.required]
    ),
    thumbnailFileId: this._fb.nonNullable.control<string>("", [
      Validators.required,
    ]),
    contentFileId: this._fb.nonNullable.control("", [Validators.required]),
    content: this._fb.nonNullable.control("", [Validators.required]),
    categoryIds: this._fb.nonNullable.control([], [Validators.required]),
    tags: this._fb.nonNullable.control<string[]>([], [Validators.required]),
  });
  public editor?: {
    create(
      sourceElementOrData: HTMLElement | string,
      config?: EditorConfig
    ): Promise<Editor>;
  } = ClassicEditor;
  public categories$ = this._blogsFacade.getCategories();

  ngAfterViewInit(): void {
    // this.editor = {
    //   create: () =>
    //     ClassicEditor.create(document.querySelector("#editor") as HTMLElement, {
    //       plugins: [Markdown],
    //     }),
    // };
  }

  create() {
    const currentUserUid = this._authService.getCurrentUserUid() ?? "";
    const nowTimestamp = new Date().getTime();

    const { thumbnails, content, ...otherData } = this.form.getRawValue();

    const body: BlogCreate = {
      ...otherData,
      createdBy: currentUserUid,
      updatedBy: currentUserUid,
      createTime: nowTimestamp,
      updateTime: nowTimestamp,
    };

    this._blogsFacade
      .createBlog(body)
      .pipe(
        mergeMap((res) => {
          const storage = getStorage(this._fs);
          const thumbnailRef = ref(storage, `${res.id}/thumbnail.jpeg`);
          const contentRef = ref(storage, `${res.id}/content.md`);

          return combineLatest({
            blog: of(res),
            thumbnailFileId: from(
              uploadBytes(thumbnailRef, this.form.value.thumbnails![0] as any)
            ),
            contentFileId: from(
              uploadString(contentRef, this.form.value.content!)
            ),
          });
        }),
        mergeMap(({ blog, thumbnailFileId, contentFileId }) => {
          return this._blogsFacade.updateBlog(blog.id, {
            thumbnailFileId: "thumbnail.jpeg",
            contentFileId: "content.md",
          });
        })
      )
      .subscribe();
  }

  handleChangeThumbnail(info: { file: NzUploadFile }) {
    console.log(info);
  }

  validateThumbnail = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
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
