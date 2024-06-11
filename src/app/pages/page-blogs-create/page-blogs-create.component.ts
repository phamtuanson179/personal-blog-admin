import { Component } from '@angular/core';
import { BlogsCreateComponent } from '@blogs/components/blogs-create/blogs-create.component';

@Component({
  selector: 'app-page-blogs-create',
  standalone: true,
  imports: [BlogsCreateComponent],
  templateUrl: './page-blogs-create.component.html',
  styleUrl: './page-blogs-create.component.scss'
})
export class PageBlogsCreateComponent {

}
