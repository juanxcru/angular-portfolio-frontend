import { Component } from '@angular/core';
import { ContactInfoComponent } from "../contact-info/contact-info.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  imports: [ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

}
