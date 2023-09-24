export interface IProject {
  id: number;
  name: string;
  html_url: string;
  description: string;
  languages: string[];
  created_at: string;
  homepage: string;
}

export interface ITag {
  tec: string;
}

export interface IUserProfile {
  avatar_url: string;
}
