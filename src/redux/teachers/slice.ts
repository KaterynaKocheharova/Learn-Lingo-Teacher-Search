import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type TeachersSliceState, Teachers } from "./types";
import { type QueryDetails } from "./operations";
import { fetchTeachers } from "./operations";

const initialState: TeachersSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: TeachersSliceState) => {
  state.isLoading = true;
};

export type TeachersPayloadType = {
  teachers: Teachers;
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
            const { isFirstBatch, teachers } = action.payload;
            if (isFirstBatch) {
              state.items = teachers;
            } else {
              state.items = [...state.items, ...teachers];
            }
          }
        }
      )
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default TeachersSlice.reducer;