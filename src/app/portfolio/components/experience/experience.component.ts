import { Component, input } from '@angular/core';
import { CvInfo } from '../../store/cvinfo.store';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {

    cvinfo = input.required<CvInfo>();


}
