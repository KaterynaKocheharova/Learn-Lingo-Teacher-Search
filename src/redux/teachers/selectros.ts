import { RootState } from "../store";
import { type Teachers } from "./types";

export type SelectBoolean = (state: RootState) => boolean;
export type SelectTeachers = (state: RootState) => Teachers;
export type SelectError = (state: RootState) => Error | string | null;

export const selectIsLoading: SelectBoolean = (state) =>
  state.teachers.isLoading;
export const selectTeachers: SelectTeachers = (state) => state.teachers.items;
export const selectError: SelectError = (state) => state.teachers.error;
