import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { BlogsTableViewComponent } from "@blogs/components/blogs-table-view/blogs-table-view.component";
import { map } from "rxjs";
import { BlogsApiService } from "src/app/apis/blogs-api.service";

@Component({
  selector: "app-blogs-container",
  standalone: true,
  imports: [BlogsTableViewComponent, CommonModule],
  templateUrl: "./blogs-container.component.html",
  styleUrl: "./blogs-container.component.scss",
})
export class BlogsContainerComponent {
  private _blog = inject(BlogsApiService);
  blogs$ = this._blog.getBlogs().pipe(map((res) => structuredClone(res)));
}
