import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { BlogsDeleteComponent } from "@blogs/components/blogs-delete/blogs-delete.component";
import { Blog } from "@blogs/interfaces/blog.interface";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";

@Component({
  selector: "app-blogs-table-view",
  standalone: true,
  imports: [CommonModule, NzCardModule, NzTableModule, BlogsDeleteComponent],
  templateUrl: "./blogs-table-view.component.html",
  styleUrl: "./blogs-table-view.component.scss",
})
export class BlogsTableViewComponent {
  blogs_ = input<Blog[] | null>(null, { alias: "blogs" });
}
