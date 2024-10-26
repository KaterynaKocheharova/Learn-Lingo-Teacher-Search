import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type QueryDetails = {
  favoriteTeachersIds: string[];
};

export const fetchFavoriteTeachers = createAsyncThunk(
  "favoriteTeachers/fetchFavoriteTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    try {
      const { favoriteTeachersIds } = queryDetails;
      console.log(favoriteTeachersIds);

      const BASE_URL = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&`;

      const promises = favoriteTeachersIds.map((id) => {
        return axios.get(`${BASE_URL}equalTo(${id})`);
      });

      const results = await Promise.all(promises);
      console.log(results);
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
