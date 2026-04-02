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
  role: string[];
  techStack: TechStackGroup | string[];
  period: string;
  summary: string;
  summaryList: string[];
  details: Detail[];
}

export interface TechStackGroup {
  frontend: string[];
  backend?: string[];
  visualization?: string[];
  qa?: string[];
  automation?: string[];
}

export interface Detail {
  title: string;
  contribution?: string;
  contents: string[];
}
