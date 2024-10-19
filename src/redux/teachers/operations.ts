import { createAsyncThunk } from "@reduxjs/toolkit";
import { teachersDB } from "../../config/firebase.js";
import { ref, query, orderByKey, startAt, endAt, get } from "firebase/database";

type QueryDetails = {
  from: number;
  to: number;
};

export const fetchContacts = createAsyncThunk(
  "teachers/fetchTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    const { from, to } = queryDetails;

    try {
      const firstTeachersQuery = query(
        ref(teachersDB, "/"),
        orderByKey(),
        startAt(from),
        endAt(to)
      );

      const data = await get(firstTeachersQuery);
      if (data.exists()) {
        console.log(data);
      } else {
        console.log("No data available");
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
