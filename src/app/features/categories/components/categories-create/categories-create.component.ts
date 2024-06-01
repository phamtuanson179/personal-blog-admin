import { Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { Store, select } from "@ngrx/store";
import { CategoryCreate } from "@categories/interfaces/category-create.interface";
import { CategoriesAction } from "@categories/reducers/categories.actions";
import { selectCategoriesLoading } from "@categories/reducers/categories.selectors";
import { filter, skip, take } from "rxjs";

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
  private _store = inject(Store);

  public form = this._fb.group({
    name: this._fb.nonNullable.control("", Validators.required),
    description: this._fb.nonNullable.control(""),
    order: this._fb.nonNullable.control(0, Validators.required),
  });

  isVisible_ = signal<boolean>(false);

  constructor() {}

  create() {
    const body: CategoryCreate = this.form.getRawValue();

    this._store.dispatch(
      CategoriesAction["[Categories]CreateCategory"]({
        categoryCreate: body,
      })
    );

    this._store
      .select(selectCategoriesLoading)
      .pipe(
        take(1),
        skip(1),
        filter((r) => !!r)
      )
      .subscribe(() => this.isVisible_.set(true));
  }
}
