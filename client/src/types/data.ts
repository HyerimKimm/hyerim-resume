export const LinkIconURL = {
  Github: 'https://www.svgrepo.com/show/361181/github.svg',
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
