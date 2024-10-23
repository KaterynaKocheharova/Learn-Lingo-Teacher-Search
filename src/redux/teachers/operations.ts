import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type Teachers } from "./types.js";
import { type TeachersPayloadType } from "./slice.js";

export type QueryDetails = {
  startKey?: string; // Track the last key fetched
  isFirstBatch: boolean;
};

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    const { startKey, isFirstBatch } = queryDetails;

    const limit = 4;
    let url;

    if (isFirstBatch) {
      url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&limitToFirst=${limit}`;
    } else {
      url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&startAfter="${startKey}"&limitToFirst=${limit}`;
    }

    try {
      const response = await axios.get(url);

      const teachers = Object.entries(response.data || {})
        .filter(([key, value]) => value !== null && value !== undefined)
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, [] as Teachers);

      const payload: TeachersPayloadType = {
        teachers: teachers.filter((teacher) => teacher !== undefined),
        isFirstBatch: isFirstBatch,
        lastKey: Object.keys(response.data).pop(), 
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
