export interface Career {
  type: string;
  company: string;
  role: string[];
  period: string;
  link: string;
  summary: string;
  summaryList: string[];
  projects: ProjectList[];
}

export interface ProjectList {
  title: string;
  description: string;
  role: string[];
  techStack: string[];
  period: string;
  summary: string;
  summaryList: string[];
}
