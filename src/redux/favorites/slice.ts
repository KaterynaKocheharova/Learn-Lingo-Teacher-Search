import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";

type FavoritesInitialState = {
  favoriteTeachersIds: string[];
};

export type RefreshFavoritesPayload = FavoritesInitialState;

const favoritesInitialState: FavoritesInitialState = {
  favoriteTeachersIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    refreshFavorites: (
      state,
      action: PayloadAction<RefreshFavoritesPayload>
    ) => {
      state.favoriteTeachersIds = action.payload.favoriteTeachersIds;
    },
  },
});

export const { refreshFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
