import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type TeachersSliceState, Teachers } from "./types";
import { type QueryDetails } from "./operations";
import { fetchTeachers, fetchFilteredTeachers } from "./operations";

const initialState: TeachersSliceState = {
  items: [],
  isLoading: false,
  error: null,
  lastKey: "",
  isFiltered: false,
};

export const handlePending = (state: TeachersSliceState) => {
  state.isLoading = true;
};

export type FilteredTeachersPayloadType = {
  teachers: Teachers;
};

export type TeachersPayloadType = {
  teachers: Teachers;
  lastKey?: string | undefined;
  isFiltered?: boolean;
} & Pick<QueryDetails, "isFirstBatch">;

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
          state: TeachersSliceState,
          action: PayloadAction<TeachersPayloadType>
        ) => {
          state.isLoading = false;
          state.error = null;

          if (action.payload) {
            const { isFirstBatch, teachers, lastKey, isFiltered } =
              action.payload;
            if (isFiltered) {
              state.isFiltered = true;
            }
            if (isFirstBatch) {
              state.items = teachers;
            } else {
              state.items = [...state.items, ...teachers];
            }
            state.lastKey = lastKey;
          }
        }
      )
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      .addCase(fetchFilteredTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredTeachers.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export default TeachersSlice.reducer;
