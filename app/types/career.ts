export interface Career {
  type: string;
  company: string;
  role: string[];
  period: string;
  link: string;
  projects: ProjectList[];
}

export interface ProjectList {
  title: string;
  description: string;
  role: string[];
  techStack: TechStackGroup | string[];
  period: string;
  summary: string;
  summaryList: string[];
  details: Detail[];
}

export interface TechStackGroup {
  frontend: string[];
  visualization?: string[];
  QA?: string[];
  Automation?: string[];
}

export interface Detail {
  title: string;
  contribution?: string;
  contents: string[];
}
