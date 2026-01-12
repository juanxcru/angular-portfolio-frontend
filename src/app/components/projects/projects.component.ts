import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/model/Project';
import { Observable } from 'rxjs';
import { ProjectCardComponent } from './project-card.component';


@Component({
  selector: 'app-projects',
  imports: [AsyncPipe, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  standalone: true
})
export class ProjectsComponent {

  projectsService = inject(ProjectsService);

  
  
  projects$!: Observable<Project[]>;

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();
  }

  
}


