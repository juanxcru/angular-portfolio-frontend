import { Component, input } from '@angular/core';
import { ContactInfoComponent } from "../contact-info/contact-info.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { CvInfo } from '../../store/cvinfo.store';

@Component({
  selector: 'app-contact',
  imports: [ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  cvinfo = input.required<CvInfo>();

}
