import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { firestore } from "../../config/firebase.js";

export type QueryDetails = {
  userId: string;
};

export const fetchFavoriteTeachers = createAsyncThunk(
  "favorites/fetchFavorites",
  async (queryDetails: QueryDetails, thunkAPI) => {
    try {
   
    } catch (error) {
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "Fetching failed. Please, try again";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
