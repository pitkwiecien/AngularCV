import { Component } from '@angular/core';
import {PolishService} from "../polish.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  constructor(public polishService: PolishService) {}
}
