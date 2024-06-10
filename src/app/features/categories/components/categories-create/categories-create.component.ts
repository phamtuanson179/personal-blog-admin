import { Component, inject, signal } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CategoryCreate } from "@categories/interfaces/category-create.interface";
import { CategoriesFacadeService } from "@categories/services/categories-facade.service";
import { AuthService } from "@shared-services/auth.service";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzModalModule } from "ng-zorro-antd/modal";

@Component({
  selector: "app-categories-create",
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
  templateUrl: "./categories-create.component.html",
  styleUrl: "./categories-create.component.scss",
})
export class CategoriesCreateComponent {
  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _categoriesFacade = inject(CategoriesFacadeService);

  public form = this._fb.group({
    name: this._fb.nonNullable.control("", Validators.required),
    description: this._fb.nonNullable.control(""),
    order: this._fb.nonNullable.control(0, Validators.required),
  });

  isVisible_ = signal<boolean>(false);

  constructor() {}

  create() {
    const body: CategoryCreate = {
      ...this.form.getRawValue(),
      createdBy: this._authService.getCurrentUserUid(),
    };
    this._categoriesFacade
      .createCategory(body)
      .subscribe((res) => this.isVisible_.set(false));
  }
}
