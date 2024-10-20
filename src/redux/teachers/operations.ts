// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { teachersDB } from "../../config/firebase.js";
// import { ref, query, orderByKey, startAt, endAt, get } from "firebase/database";
// import { type Teachers } from "./types.js";
// import { type TeachersPayloadType } from "./slice.js";

// export type QueryDetails = {
//   from: number;
//   to: number;
//   // the last field is needed for redux reducer to know if it should spread or overrite the array of teachers
//   isFirstBatch: boolean;
// };
// export const fetchTeachers = createAsyncThunk(
//   "teachers/fetchTeachers",
//   async (queryDetails: QueryDetails, thunkAPI) => {
//     const { from, to, isFirstBatch } = queryDetails;

//     try {
//       const firstTeachersQuery = query(
//         ref(teachersDB, "/"),
//         orderByKey(),
//         startAt(String(from)),
//         endAt(String(to))
//       );

//       const data = await get(firstTeachersQuery);

//       if (data.exists()) {
//         const payload: TeachersPayloadType = {
//           teachers: data.val(),
//           isFirstBatch: isFirstBatch,
//         };

//         return payload;
//       } else {
//         console.log("No data available");
//         return {
//           teachers: [],
//           isFirstBatch,
//         };
//       }
//     } catch (error) {
//       let errorMessage;
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       } else {
//         errorMessage = "Fetching teachers failed. Please, try again";
//       }
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { teachersDB } from "../../config/firebase.js";
import { ref, query, orderByKey, startAt, endAt, get } from "firebase/database";
import { type Teachers } from "./types.js";
import { type TeachersPayloadType } from "./slice.js";

export type QueryDetails = {
  from: number;
  to: number;
  // the last field is needed for redux reducer to know if it should spread or overwrite the array of teachers
  isFirstBatch: boolean;
};

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    const { from, to, isFirstBatch } = queryDetails;

    try {
      const firstTeachersQuery = query(
        ref(teachersDB, "/"),
        orderByKey(),
        startAt(String(from)),
        endAt(String(to))
      );

      const data = await get(firstTeachersQuery);

      if (data.exists()) {
        const teachers = Object.entries(data.val() || {})
          .filter(([key, value]) => value !== null && value !== undefined)
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, [] as Teachers); 
        const payload: TeachersPayloadType = {
          teachers,
          isFirstBatch: isFirstBatch,
        };

        return payload;
      } else {
        console.log("No data available");
        return {
          teachers: [],
          isFirstBatch,
        };
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
