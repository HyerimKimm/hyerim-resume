export const LinkIconURL = {
  Github: 'https://www.svgrepo.com/show/361181/github.svg',
  Notion:
    'https://cdn.icon-icons.com/icons2/2389/PNG/512/notion_logo_icon_145025.png',
  Blog: 'https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/comment-blog-icon.png',
};

export enum SkillLevel {
  '🥇' = 1,
  '🥈' = 2,
  '🥉' = 3,
}

export type skillCategory = 'Front-end' | 'Back-end' | 'Database' | 'Etc';

export type data = {
  profile: profile;
  links: link[];
  skills: skill[];
  projects: project[];
};

export type profile = {
  title: string;
  name: string;
  profileImageUrl: string;
  address: string;
  email: string;
  phoneNumber: string;
  introduce: string;
};

export type link = {
  linkId: number;
  linkName: string;
  url: string;
};

export type skill = {
  idSkills: number;
  category: skillCategory;
  skillName: string;
  level: SkillLevel;
  description: string;
};

export type project = {
  projectId: number;
  projectName: string;
  startDate: string;
  endDate: string;
  orderNum: number;
  deployLink: string;
  repositoryLink: string;
  links: string;
  staff: string;
  description: string;
  responsibilities: string;
  results: string;
};
