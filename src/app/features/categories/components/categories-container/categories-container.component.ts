import { Component } from '@angular/core';
import { CategoriesTableViewComponent } from '../categories-table-view/categories-table-view.component';
import { CategoriesFilterComponent } from '../categories-filter/categories-filter.component';

@Component({
  selector: 'app-categories-container',
  standalone: true,
  imports: [CategoriesTableViewComponent, CategoriesFilterComponent],
  templateUrl: './categories-container.component.html',
  styleUrl: './categories-container.component.scss',
})
export class CategoriesContainerComponent {}
