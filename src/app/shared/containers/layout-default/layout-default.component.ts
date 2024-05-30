import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-layout-default',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss'
})
export class LayoutDefaultComponent {

}
