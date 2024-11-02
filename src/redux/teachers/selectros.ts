import { RootState } from "../store";
import { type Teachers } from "./types";
import { type SelectError, SelectBoolean, SelectString } from "../types";

export type SelectTeachers = (state: RootState) => Teachers;

export const selectIsLoading: SelectBoolean = (state) =>
  state.teachers.isLoading;
export const selectTeachers: SelectTeachers = (state) => state.teachers.items;
export const selectError: SelectError = (state) => state.teachers.error;
export const selectLastKey: SelectString = (state) => state.teachers.lastKey;
export const SelectIsFiltered: SelectBoolean = (state) =>
  state.teachers.isFiltered;
