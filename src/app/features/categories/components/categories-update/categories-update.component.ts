import { Component, effect, inject, input, signal } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CategoryUpdate } from "@categories/interfaces/category-update.interface";
import { Category } from "@categories/interfaces/category.interface";
import { CategoriesFacadeService } from "@categories/services/categories-facade.service";
import { AuthService } from "@shared-services/auth.service";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzModalModule } from "ng-zorro-antd/modal";

@Component({
  selector: "app-categories-update",
  standalone: true,
  imports: [
    NzModalModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
  ],
  templateUrl: "./categories-update.component.html",
  styleUrl: "./categories-update.component.scss",
})
export class CategoriesUpdateComponent {
  updatedElm_ = input<Category | null>(null, { alias: "updatedElm" });
  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _categoriesFacade = inject(CategoriesFacadeService);

  public form = this._fb.group({
    name: this._fb.nonNullable.control("", Validators.required),
    description: this._fb.nonNullable.control(""),
    order: this._fb.nonNullable.control(0, Validators.required),
  });

  isVisible_ = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.isVisible_() == true &&
        this.updatedElm_() &&
        this.form.patchValue(this.updatedElm_()!);
    });
  }

  update() {
    const body: CategoryUpdate = {
      ...this.form.getRawValue(),
      updatedBy: this._authService.getCurrentUserUid(),
    };

    this._categoriesFacade
      .updateCategory(this.updatedElm_()?.id, body)
      .subscribe(() => this.isVisible_.set(false));
  }
}
