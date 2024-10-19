import { type FetchingData } from "../types";

type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type Teacher = {
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
};

export type Teachers = Teacher[];

export type TeachersSliceState = {
  teachers: Teachers;
} & FetchingData;
