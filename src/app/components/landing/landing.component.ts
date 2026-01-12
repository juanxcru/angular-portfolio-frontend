import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-landing',
  imports: [ProjectsComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true
})
export class LandingComponent {
 showProjects = false;

  onShowProjects() {
    this.showProjects = !this.showProjects;
  }

}
