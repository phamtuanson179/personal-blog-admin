import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BlogsDeleteComponent } from "@blogs/components/blogs-delete/blogs-delete.component";
import { Blog } from "@blogs/interfaces/blog.interface";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTableModule } from "ng-zorro-antd/table";

@Component({
  selector: "app-blogs-table-view",
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzTableModule,
    BlogsDeleteComponent,
    NzButtonModule,
    NzIconModule,
    RouterModule
  ],
  templateUrl: "./blogs-table-view.component.html",
  styleUrl: "./blogs-table-view.component.scss",
})
export class BlogsTableViewComponent {
  blogs_ = input<Blog[] | null>(null, { alias: "blogs" });
}
