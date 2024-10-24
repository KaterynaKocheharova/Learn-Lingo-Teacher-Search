import { RootState } from "../store";

type SelectFavorites = (state: RootState) => string[];

export const selectFavorites: SelectFavorites = (state) =>
  state.favorites.favoriteTeachersIds;
