import { RootState } from "../store";
import { type Teachers } from "./types";

//  maybe generic???

export type SelectBoolean = (state: RootState) => boolean;
export type SelectTeachers = (state: RootState) => Teachers;
export type SelectError = (state: RootState) => Error | string | null;
export type SelectString = (state: RootState) => string;

export const selectIsLoading: SelectBoolean = (state) =>
  state.teachers.isLoading;
export const selectTeachers: SelectTeachers = (state) => state.teachers.items;
export const selectError: SelectError = (state) => state.teachers.error;
export const selectLastKey: SelectString = (state) => state.teachers.lastKey;
export const SelectIsFiltered: SelectBoolean = (state) =>
  state.teachers.isFiltered;
