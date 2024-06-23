import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { UsersTableViewComponent } from "@users/components/users-table-view/users-table-view.component";
import { UsersFacadeService } from "@users/services/user-facade.service";
import { map } from "rxjs";

@Component({
  selector: "app-users-container",
  standalone: true,
  imports: [UsersTableViewComponent, CommonModule],
  templateUrl: "./users-container.component.html",
  styleUrl: "./users-container.component.scss",
})
export class UsersContainerComponent {
  private _usersFacade = inject(UsersFacadeService);
  users$ = this._usersFacade
    .getUsers()
    .pipe(map((res) => structuredClone(res)));
}
