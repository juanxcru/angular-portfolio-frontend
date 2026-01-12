export enum ProjectType {
  PERSONAL = 'personal',
  IN_COMPANY = 'in_company'
}

export interface Project {
  id: number;
  title: string;
  techStack: string;
  summary: string;
  tags: string[];
  type: ProjectType;
  repositoryUrl?: string;
  url?: string;
}