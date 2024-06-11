import { Component } from '@angular/core';
import { BlogsContainerComponent } from '@blogs/components/blogs-container/blogs-container.component';

@Component({
  selector: 'app-page-blogs-container',
  standalone: true,
  imports: [BlogsContainerComponent],
  templateUrl: './page-blogs-container.component.html',
  styleUrl: './page-blogs-container.component.scss'
})
export class PageBlogsContainerComponent {

}
