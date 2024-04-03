import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-link-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './link-bar.component.html',
  styleUrl: './link-bar.component.css'
})
export class LinkBarComponent {

}
