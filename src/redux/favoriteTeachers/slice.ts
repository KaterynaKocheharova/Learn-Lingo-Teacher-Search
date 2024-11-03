import { fetchFavoriteTeachers } from "./operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { type Teachers, Teacher } from "./../teachers/types";
import { type FetchingData } from "../types";

type FavoriteTeachersState = { items: Teachers; isLoading: boolean } & Pick<
  FetchingData,
  "error"
>;

const initialState: FavoriteTeachersState = {
  items: [],
  isLoading: false,
  error: null,
};

export type FavoriteTeachersPayload = {
  teachers: Teachers;
};

export const handleError = <
  T extends { isLoading: boolean } & Pick<FetchingData, "error">
>(
  state: T,
  action: PayloadAction<unknown>
) => {
  state.isLoading = false;
  if (action.payload instanceof Error) {
    state.error = action.payload.message;
  } else if (typeof action.payload === "string") {
    state.error = action.payload;
  } else {
    state.error = "Unknown error";
  }
};

export const handlePending = <T extends { isLoading: boolean }>(state: T) => {
  state.isLoading = true;
};

const favoriteTeachersSlice = createSlice({
  name: "favoriteTeachers",
  initialState,
  reducers: {
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items = state.items.filter((item: Teacher) => id !== item.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteTeachers.pending, handlePending)
      .addCase(
        fetchFavoriteTeachers.fulfilled,
        (state, action: PayloadAction<FavoriteTeachersPayload>) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload.teachers;
        }
      )
      .addCase(fetchFavoriteTeachers.rejected, handleError);
  },
});

export default favoriteTeachersSlice.reducer;
