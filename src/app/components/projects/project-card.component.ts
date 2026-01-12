import { Component, input } from "@angular/core";
import { Project, ProjectType } from "../../services/model/Project";


@Component({
  selector: "app-project-card",
  imports: [],
  templateUrl: "./project-card.component.html",
  standalone: true

})
export class ProjectCardComponent {

  project = input.required<Project>();
  ProjectType = ProjectType; // awful 


  
}  