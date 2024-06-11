import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { CategoriesDeleteComponent } from "@categories/components/categories-delete/categories-delete.component";
import { CategoriesUpdateComponent } from "@categories/components/categories-update/categories-update.component";
import { Category } from "@categories/interfaces/category.interface";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { CategoriesCreateComponent } from "src/app/features/categories/components/categories-create/categories-create.component";

@Component({
  selector: "app-categories-table-view",
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzTableModule,
    CategoriesCreateComponent,
    CategoriesUpdateComponent,
    CategoriesDeleteComponent,
  ],
  templateUrl: "./categories-table-view.component.html",
  styleUrl: "./categories-table-view.component.scss",
})
export class CategoriesTableViewComponent {
  categories_ = input<Category[] | null>(null, { alias: "categories" });
}
