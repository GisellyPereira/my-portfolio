export type ProjectType = 'web' | 'mobile' | 'design';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  type: ProjectType;
}

export interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  onClick: () => void;
} 