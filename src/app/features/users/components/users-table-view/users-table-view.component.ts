import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { UsersDeleteComponent } from "@users/components/users-delete/users-delete.component";
import { UsersUpdateComponent } from "@users/components/users-update/users-update.component";
import { User } from "@users/interfaces/user.interface";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzImageModule } from "ng-zorro-antd/image";

@Component({
  selector: "app-users-table-view",
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzTableModule,
    NzImageModule,
    UsersUpdateComponent,
    UsersDeleteComponent,
  ],
  templateUrl: "./users-table-view.component.html",
  styleUrl: "./users-table-view.component.scss",
})
export class UsersTableViewComponent {
  users_ = input<User[] | null>(null, { alias: "users" });
}
