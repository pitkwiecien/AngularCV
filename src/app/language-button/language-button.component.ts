import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {PolishService} from "../polish.service";

@Component({
  selector: 'app-language-button',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.css'
})
export class LanguageButtonComponent {
  constructor(public polishService: PolishService) {
  }

  public switchPolish = () => {
    this.polishService.polish = !this.polishService.polish
  }

  @Input() src: string = "";
}
