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
  experiences: experience[];
  educations: education[];
  certificates: certificate[];
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
  orderNum: number;
};

export type skill = {
  idSkills: number;
  category: skillCategory;
  skillName: string;
  level: SkillLevel;
  description: string;
  orderNum: number;
};

export type project = {
  projectId: number;
  projectName: string;
  startDate: string;
  endDate: string;
  deployLink: string;
  repositoryLink: string;
  links: string;
  staff: string;
  description: string;
  responsibilities: string;
  results: string;
  orderNum: number;
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

export type experience = {
  experienceId: number;
  title: string;
  startDate: string;
  endDate: string;
  place: string;
  description: string;
  orderNum: number;
};

export type education = {
  educationId: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  orderNum: number;
};

export type certificate = {
  certificateId: number;
  title: string;
  issueDate: string;
  fileUrl: string | null;
  orderNum: number;
};
