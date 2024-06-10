import { Component, inject, input } from "@angular/core";
import { Category } from "@categories/interfaces/category.interface";
import { CategoriesFacadeService } from "@categories/services/categories-facade.service";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";

@Component({
  selector: "app-categories-delete",
  standalone: true,
  imports: [NzPopconfirmModule, NzButtonModule, NzIconModule],
  templateUrl: "./categories-delete.component.html",
  styleUrl: "./categories-delete.component.scss",
})
export class CategoriesDeleteComponent {
  delElm_ = input<Category | null>(null, { alias: "delElm" });
  private _categoriesFacade = inject(CategoriesFacadeService);

  confirm() {
    this._categoriesFacade.deleteCategory(this.delElm_()?.id);
  }
}
