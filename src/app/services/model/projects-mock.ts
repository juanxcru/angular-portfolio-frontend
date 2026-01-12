import { Project, ProjectType } from "./Project";

export const PROJECTS_MOCK: Project[] = [
  {
    id: 1,
    title: 'Project Title',
    techStack: 'Tech Stack',
    tags: ['tag1', 'tag2'],
    summary: 'Project Summary',
    type: ProjectType.PERSONAL,
    repositoryUrl: 'https://hola.com',
    url: 'https://mundo.com',
  },
  {
    id: 2,
    title: 'Another Project',
    techStack: 'Another Tech Stack',
    tags: ['tag3', 'tag4'],
    summary: 'Another Project Summary',
    type: ProjectType.IN_COMPANY,
  },
  {
    id: 3,
    title: 'Third Project',
    techStack: 'Third Tech Stack',
    tags: ['tag5', 'tag6'],
    summary: 'Third Project Summary',
    type: ProjectType.IN_COMPANY,
  }

];