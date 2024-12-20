import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Teachers } from "../teachers/types";

export type QueryDetails = {
  favoriteTeachersIds: string[];
};

export const fetchFavoriteTeachers = createAsyncThunk(
  "favoriteTeachers/fetchFavoriteTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    try {
      const { favoriteTeachersIds } = queryDetails;

      const BASE_URL = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="id"&`;

      const promises = favoriteTeachersIds.map((id) => {
        return axios
          .get(`${BASE_URL}equalTo="${id}"`)
          .then((response) => Object.values(response.data));
      });

      const results = await Promise.all(promises);
      return {
        teachers: results.flat() as Teachers,
      };
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
