import { fetchFavoriteTeachers } from "./operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeachersPayloadType } from "./../teachers/slice";
import { TeachersSliceState } from "./../teachers/types";
import { removeFromFavorites } from "../favorites/slice";
import { type Teacher } from "./../teachers/types";

type FavoriteTeachersState = Omit<TeachersSliceState, "lastKey">;

const initialState: FavoriteTeachersState = {
  items: [],
  isLoading: false,
  error: null,
};

export type FavoriteTeachersPayload = Omit<
  TeachersPayloadType,
  "lastKey" | "isFirstBatch"
>;

export const handlePending = (state: FavoriteTeachersState) => {
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
        (
          state: FavoriteTeachersState,
          action: PayloadAction<FavoriteTeachersPayload>
        ) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload.teachers;
        }
      )
      .addCase(fetchFavoriteTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default favoriteTeachersSlice.reducer;
