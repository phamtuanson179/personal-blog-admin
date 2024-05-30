import { Component } from '@angular/core';
import { CategoriesContainerComponent } from '../../features/categories/components/categories-container/categories-container.component';

@Component({
  selector: 'app-page-categories-container',
  standalone: true,
  imports: [CategoriesContainerComponent],
  templateUrl: './page-categories-container.component.html',
  styleUrl: './page-categories-container.component.scss'
})
export class PageCategoriesContainerComponent {

}
