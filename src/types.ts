export interface PortfolioConfig {
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  dhmsVercelUrl: string;
  todoListVercelUrl: string;
  repoIsQuizUrl: string;
  repoBet4RentUrl: string;
  repoTodoListUrl: string;
  dhmsTechStack: string;
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  iconName: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  isMobile: boolean;
  screenshotPath?: string;
  liveUrl?: string;
  sourceUrl: string;
  isInProgress?: boolean;
}
