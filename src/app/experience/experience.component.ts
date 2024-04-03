import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PolishService} from "../polish.service";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  constructor(public polishService: PolishService) {}

}
