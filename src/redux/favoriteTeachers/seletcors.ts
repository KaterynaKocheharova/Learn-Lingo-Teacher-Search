import {
  type SelectBoolean,
  SelectTeachers,
  SelectError,
} from "../teachers/selectros";

export const selectIsLoading: SelectBoolean = (state) =>
  state.favoriteTeachers.isLoading;
export const selectFavoriteTeachers: SelectTeachers = (state) =>
  state.favoriteTeachers.items;
export const selectError: SelectError = (state) => state.favoriteTeachers.error;
