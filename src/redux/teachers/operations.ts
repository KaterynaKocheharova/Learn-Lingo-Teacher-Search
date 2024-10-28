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
      // url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&limitToFirst=${limit}`;
      url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="price_per_hour"&startAt=20&endAt=25&limitToFirst=${limit}`;
    } else {
      url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&startAfter="${startKey}"&limitToFirst=${limit}`;
    }

    // Option 1: Structure Data Differently (Best Practice)
    // If you can adjust the structure of your data, consider storing each price as a key with a boolean value under a prices object instead of as an array. For example:
    
    // json
    // Copy code
    // "teachers": {
    //   "teacher1": {
    //     "prices": {
    //       "20": true,
    //       "25": true,
    //       "30": true
    //     },
    //     "price_per_hour": 25
    //   },
    //   "teacher2": {
    //     "prices": {
    //       "20": true,
    //       "35": true
    //     },
    //     "price_per_hour": 30
    //   }
    // }

    // With this structure, you can then use Firebase queries to check if prices/30 exists for a teacher:
    
    // javascript
    // Copy code
    // url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="prices/30"&equalTo=true`;
    // refactor the operation to get filters too
    // the Query details type should be extended to include the filters, then construct the url if having these filters
    // index data
    // handle cases when data retrieved is null


    // {
    //   "rules": {
    //     ".read": true,
    //     ".write": true,
    //     "teachers": {
    //       ".read": true,
    //       ".indexOn": ["id"],
    //       "teacherInTotal": {
    //         ".read": true
    //       }
    //     }
    //   }
    // } - how can i modify the rules 

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
