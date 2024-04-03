import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PolishService} from "../polish.service";
import {LanguageButtonComponent} from "../language-button/language-button.component";

@Component({
  selector: 'app-link-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, LanguageButtonComponent],
  templateUrl: './link-bar.component.html',
  styleUrl: './link-bar.component.css'
})
export class LinkBarComponent {
  constructor(public polishService: PolishService) {}
}
