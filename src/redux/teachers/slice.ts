import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type TeachersSliceState, Teachers } from "./types";
import { fetchTeachers, fetchFilteredTeachers } from "./operations";
import { handlePending, handleError } from "../favoriteTeachers/slice";

const initialState: TeachersSliceState = {
  items: [],
  isLoading: false,
  error: null,
  lastKey: "",
  isFiltered: false,
};

export type TeachersPayloadType = {
  teachers: Teachers;
  lastKey: string;
  isFirstBatch: boolean;
};

export type FilteredTeachersPayloadType = {
  teachers: Teachers;
};

const TeachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(
        fetchTeachers.fulfilled,
        (
          state,
          action: PayloadAction<TeachersPayloadType>
        ) => {
          state.isLoading = false;
          state.error = null;

          if (action.payload) {
            const { isFirstBatch, teachers, lastKey } =
              action.payload;
            if (isFirstBatch) {
              state.items = teachers;
            } else {
              state.items = [...state.items, ...teachers];
            }
            state.lastKey = lastKey;
          }
        }
      )
      .addCase(fetchTeachers.rejected, handleError)
      .addCase(
        fetchFilteredTeachers.fulfilled,
        (state, action: PayloadAction<FilteredTeachersPayloadType>) => {
          const { teachers } = action.payload;
          state.error = null;
          state.isLoading = false;
          state.items = teachers;
          state.isFiltered = true;
        }
      )
      .addCase(fetchFilteredTeachers.rejected, handleError)
      .addCase(fetchFilteredTeachers.pending, handlePending);
  },
});

export default TeachersSlice.reducer;
