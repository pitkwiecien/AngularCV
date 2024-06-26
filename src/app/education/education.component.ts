import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PolishService} from "../polish.service";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor(public polishService: PolishService) {}
}
