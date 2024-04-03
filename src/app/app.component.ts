import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LinkBarComponent} from "./link-bar/link-bar.component";
import {NgIf} from "@angular/common";
import {PolishService} from "./polish.service";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LinkBarComponent, RouterOutlet, NgIf, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public polishService: PolishService) {
    console.log("a")
  }
  title = 'cv';
}
