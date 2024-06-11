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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
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
  ],
  templateUrl: "./blogs-create.component.html",
  styleUrl: "./blogs-create.component.scss",
})
export class BlogsCreateComponent implements AfterViewInit {
  private _fb = inject(FormBuilder);
  private _blogsFacade = inject(BlogsFacadeService);
  loading = false;
  form = this._fb.group({
    title: this._fb.nonNullable.control("", [Validators.required]),
    summary: this._fb.nonNullable.control("", [Validators.required]),
    thumbnail: this._fb.nonNullable.control("", [Validators.required]),
    content: this._fb.nonNullable.control("", [Validators.required]),
    categoryIds: this._fb.nonNullable.control([], [Validators.required]),
    tags: this._fb.nonNullable.control("", [Validators.required]),
  });
  public editor = ClassicEditor;
  public categories$ = this._blogsFacade.getCategories();

  ngAfterViewInit(): void {
    // document.querySelector("#editor") && (this.editor = ClassicEditor.create(document.querySelector("#editor"), {
    //   removePlugins: ["Heading"],
    //   toolbar: [
    //     "bold",
    //     "italic",
    //     "bulletedList",
    //     "numberedList",
    //     "blockQuote",
    //     "link",
    //   ],
    // }))
  }

  create() {}

  handleChangeThumbnail(info: { file: NzUploadFile }) {
    // switch (info.file.status) {
    //   case 'uploading':
    //     this.loading = true;
    //     break;
    //   case 'done':
    //     // Get this url from response in real world.
    //     this.getBase64(info.file!.originFileObj!, (img: string) => {
    //       this.loading = false;
    //       this.avatarUrl = img;
    //     });
    //     break;
    //   case 'error':
    //     this.msg.error('Network error');
    //     this.loading = false;
    //     break;
    // }
  }
}
