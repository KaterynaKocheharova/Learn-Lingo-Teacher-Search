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
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favoriteTeachersIds = [
        ...state.favoriteTeachersIds,
        action.payload,
      ];
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favoriteTeachersIds = state.favoriteTeachersIds.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { refreshFavorites, addToFavorites, removeFromFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
