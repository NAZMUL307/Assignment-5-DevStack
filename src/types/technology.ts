export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools";

export interface Technology {
  id: number;
  name: string;
  category: TechnologyCategory;
  description: string;
  icon: string;
  color: string;
}