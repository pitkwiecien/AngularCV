import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LinkBarComponent} from "./link-bar/link-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LinkBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
}
