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
  careers: career[];
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

export type career = {
  careerId: number;
  companyName: string;
  startDate: string;
  endDate: string;
  departmentName: string;
  responsibilities: string;
  results: string;
  orderNum: number;
};
