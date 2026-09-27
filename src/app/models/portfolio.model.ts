export type ProjectCategory = 'all' | 'maritime' | 'fintech' | 'telecom';
export type SkillCategory = 'all' | 'backend' | 'frontend' | 'database' | 'devops';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'maritime' | 'fintech' | 'telecom';
  badgeLabel: string;
  badgeClass: string;
  role: string;
  summary: string;
  overview: string;
  features: string[];
  architecture: string[];
  impact: string;
  techStack: string[];
}

export interface SkillCard {
  title: string;
  category: 'backend' | 'frontend' | 'database' | 'devops';
  level: string;
  description: string;
  tags: string[];
  icon: string;
  bgClass: string;
}

export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets?: string[];
  tech: string[];
  isEducation?: boolean;
  icon: string;
}

export interface Metric {
  value: number | string;
  suffix?: string;
  label: string;
}
