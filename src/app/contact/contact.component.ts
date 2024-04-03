import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PolishService} from "../polish.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public polishService: PolishService, private http: HttpClient) {}
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted with data:', this.formData);
    this.http.post('localhost:8080/send-message', this.formData).subscribe(response => {
      console.log('Response:', response);
    });
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

  formValid() {
    return this.formData.name && this.formData.email && this.formData.message;
  }
}
