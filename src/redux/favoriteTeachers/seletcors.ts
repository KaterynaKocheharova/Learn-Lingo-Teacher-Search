import {
  SelectTeachers,
} from "../teachers/selectros";
import { type SelectBoolean, SelectError } from "../types";

export const selectIsLoading: SelectBoolean = (state) =>
  state.favoriteTeachers.isLoading;
export const selectFavoriteTeachers: SelectTeachers = (state) =>
  state.favoriteTeachers.items;
export const selectError: SelectError = (state) => state.favoriteTeachers.error;
