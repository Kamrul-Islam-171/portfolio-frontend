export interface TEducationItem {
  _id: string;
  degree: string;
  university: string;
  location: string;
  passingYear: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ExperienceItem {
  _id: string;
  companyName: string;
  position: string;
  location: string;
  jobType: string;
  jobDescription: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TBlog = {
  _id: string;
  title: string;
  details: string;
  coverImage: string;
};

export type TSkill = {
  _id: string;
  skill: string;
  skillIcon: string;
};

export interface TProject {
  _id: string;
  title: string;
  details: string;
  keyFeatures: string[];
  techStack: string[];
  imageUrl: string;
  liveLink: string;
  clientLink: string;
  serverLink: string;
}