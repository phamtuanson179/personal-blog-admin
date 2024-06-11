import { Component } from '@angular/core';
import { BlogsDetailComponent } from '@blogs/components/blogs-detail/blogs-detail.component';

@Component({
  selector: 'app-page-blogs-detail',
  standalone: true,
  imports: [BlogsDetailComponent],
  templateUrl: './page-blogs-detail.component.html',
  styleUrl: './page-blogs-detail.component.scss'
})
export class PageBlogsDetailComponent {

}
