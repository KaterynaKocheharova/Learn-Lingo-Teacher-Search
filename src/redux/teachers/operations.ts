import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type Teachers } from "./types.js";
import { type TeachersPayloadType } from "./slice.js";

export type QueryDetails = {
  startKey?: string;  // Track the last key fetched
  limit: number;
  isFirstBatch: boolean;
};

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    const { startKey, limit, isFirstBatch } = queryDetails;

    console.log(limit);

    try {
      let url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&limitToFirst=${limit}`;
      
      // If this is not the first batch, fetch the next set of data after the last key
      if (startKey) {
        url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&startAfter="${startKey}"&limitToFirst=${limit}`;
      }

      const response = await axios.get(url);
      console.log(response.data);

      const teachers = Object.entries(response.data || {})
        .filter(([key, value]) => value !== null && value !== undefined)
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, [] as Teachers);

      const payload: TeachersPayloadType = {
        teachers: teachers.filter((teacher) => teacher !== undefined),
        isFirstBatch: isFirstBatch,
        lastKey: Object.keys(response.data).pop(),  // Track the last key fetched
      };

      return payload;
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
