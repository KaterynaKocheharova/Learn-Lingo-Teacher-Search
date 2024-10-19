import { createAsyncThunk } from "@reduxjs/toolkit";
import { teachersDB } from "../../config/firebase.js";
import { ref, query, orderByKey, startAt, endAt, get } from "firebase/database";
import { type Teachers } from "./types.js";
import { type TeachersPayloadType } from "./slice.js";

export type QueryDetails = {
  from: number;
  to: number;
  // the last field is needed for redux reducer to know if it should spread or overrite the array of teachers
  isFirstBatch: boolean;
};
export const fetchTeachers = createAsyncThunk<
  TeachersPayloadType | undefined, // Specify the return type explicitly
  QueryDetails
>(
  "teachers/fetchTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    const { from, to, isFirstBatch } = queryDetails;

    try {
      const firstTeachersQuery = query(
        ref(teachersDB, "/"),
        orderByKey(),
        startAt(from),
        endAt(to)
      );

      const data = await get(firstTeachersQuery);

      if (data.exists()) {
        const payload: TeachersPayloadType = {
          teachers: data.val(),
          isFirstBatch: isFirstBatch,
        };

        return payload; // return the payload
      } else {
        console.log("No data available");
        return undefined; // Return undefined explicitly when no data is available
      }
    } catch (error) {
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "Fetching teachers failed. Please, try again";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);