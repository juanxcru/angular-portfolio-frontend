import { Component, inject, input } from '@angular/core';
import { CvInfo, CvInfoStore } from '../../store/cvinfo.store';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

    cvinfo = input.required<CvInfo>();


}
