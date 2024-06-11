import { Component } from '@angular/core';
import { BlogsUpdateComponent } from '@blogs/components/blogs-update/blogs-update.component';

@Component({
  selector: 'app-page-blogs-update',
  standalone: true,
  imports: [BlogsUpdateComponent],
  templateUrl: './page-blogs-update.component.html',
  styleUrl: './page-blogs-update.component.scss'
})
export class PageBlogsUpdateComponent {

}
