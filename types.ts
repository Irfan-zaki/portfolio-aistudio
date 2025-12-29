
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Frameworks' | 'Tools' | 'AI/ML';
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
