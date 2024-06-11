import { Component, inject } from "@angular/core";
import { CategoriesFilterComponent } from "../categories-filter/categories-filter.component";
import { CategoriesTableViewComponent } from "../categories-table-view/categories-table-view.component";
import { CategoriesApiService } from "src/app/apis/categories-api.service";
import { map } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-categories-container",
  standalone: true,
  imports: [
    CategoriesTableViewComponent,
    CategoriesFilterComponent,
    CommonModule,
  ],
  templateUrl: "./categories-container.component.html",
  styleUrl: "./categories-container.component.scss",
})
export class CategoriesContainerComponent {
  private _category = inject(CategoriesApiService);
  categories$ = this._category
    .getCategories()
    .pipe(map((res) => structuredClone(res)));
}
