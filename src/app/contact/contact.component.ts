import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PolishService} from "../polish.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public polishService: PolishService) {}
}
