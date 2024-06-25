import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BlogCreate } from "@blogs/interfaces/blog-create.interface";
import { BlogsFacadeService } from "@blogs/services/blogs-facade.service";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
} from "@ckeditor/ckeditor5-image";
import { AuthService } from "@shared-services/auth.service";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzUploadFile, NzUploadModule } from "ng-zorro-antd/upload";

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
  private _authService = inject(AuthService);
  public categories$ = this._blogsFacade.getCategories();

  loading = false;
  form = this._fb.group({
    title: this._fb.nonNullable.control("", [Validators.required]),
    summary: this._fb.nonNullable.control("", [Validators.required]),
    thumbnails: this._fb.nonNullable.control<NzUploadFile[]>(
      [],
      [Validators.required]
    ),
    content: this._fb.nonNullable.control("", [Validators.required]),
    categoryIds: this._fb.nonNullable.control([], [Validators.required]),
    tags: this._fb.nonNullable.control<string[]>([]),
  });

  ngAfterViewInit(): void {
    ClassicEditor.create(document.querySelector("#editor") as HTMLElement, {
      plugins: [ImageToolbar, ImageCaption, ImageStyle, ImageResize, Image],
      toolbar: ["insertImage" /* ... */],
    });
  }

  create() {
    const currentUserUid = this._authService.getCurrentUserUid() ?? "";
    const nowTimestamp = new Date().getTime();

    const body: BlogCreate & { thumbnails: NzUploadFile[]; content: string } = {
      ...this.form.getRawValue(),
      createdBy: currentUserUid,
      updatedBy: currentUserUid,
      createTime: nowTimestamp,
      updateTime: nowTimestamp,
    };

    this._blogsFacade.createBlog(body).subscribe();
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

  back() {
    this._blogsFacade.back();
  }
}
