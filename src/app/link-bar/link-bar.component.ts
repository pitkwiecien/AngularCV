import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {PolishService} from "../polish.service";

@Component({
  selector: 'app-link-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './link-bar.component.html',
  styleUrl: './link-bar.component.css'
})
export class LinkBarComponent {
  constructor(public polishService: PolishService) {}
}
