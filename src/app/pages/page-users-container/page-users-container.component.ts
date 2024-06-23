import { Component } from '@angular/core';
import { UsersContainerComponent } from '@users/components/users-container/users-container.component';

@Component({
  selector: 'app-page-users-container',
  standalone: true,
  imports: [UsersContainerComponent],
  templateUrl: './page-users-container.component.html',
  styleUrl: './page-users-container.component.scss'
})
export class PageUsersContainerComponent {

}
