
import {Injectable} from '@angular/core';
import { Project, ProjectType } from './model/Project';
import { PROJECTS_MOCK } from './model/projects-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  getProjects(): Observable<Project[]> {
    return of(PROJECTS_MOCK);
  }

  getProjectById(id: number) {}

  searchProjects(term: string) {}
  

}