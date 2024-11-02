import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { type Teachers } from "./types.js";
import {
  type TeachersPayloadType,
  FilteredTeachersPayloadType,
} from "./slice.js";
import { type Filters } from "../filters/slice.js";

export type QueryDetails = {
  startKey?: string;
  isFirstBatch?: boolean;
};

const BASE_URL =
  "https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    const { startKey, isFirstBatch = false } = queryDetails;

    const limit = 4;

    const params = {
      orderBy: JSON.stringify("$key"),
      limitToFirst: limit,
      ...(isFirstBatch ? {} : { startAfter: JSON.stringify(startKey) }),
    };

    try {
      const response = await axios.get(BASE_URL, {
        params,
      });

      const teachers = Object.entries(response.data)
        .filter(([key, value]) => value !== null && value !== undefined)
        .map((entry) => entry[1]);

      const payload: TeachersPayloadType = {
        teachers: teachers as Teachers,
        isFirstBatch: isFirstBatch,
        lastKey: Object.keys(response.data).pop() as string,
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

// ========================================================= FETCHING FILTERED TEACHERS ==================================================

export type FilterQueryDetails = {
  filters: Partial<Filters["filters"]>;
};

export const fetchFilteredTeachers = createAsyncThunk(
  "teachers/fetchFilteredTeachers",
  async (queryDetails: FilterQueryDetails, thunkAPI) => {
    const { filters } = queryDetails;

    let fetchFilteredTeachersPromises = [];

    if (filters.language) {
      fetchFilteredTeachersPromises.push(
        await axios.get(
          `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="languages/${filters.language}"&equalTo=true&`
        )
      );
    }

    if (filters.level) {
      fetchFilteredTeachersPromises.push(
        await axios.get(
          `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="levels/${filters.level}"&equalTo=true`
        )
      );
    }

    if (filters.price) {
      fetchFilteredTeachersPromises.push(
        await axios.get(
          `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="price_per_hour"&equalTo=${filters.price}`
        )
      );
    }

    try {
      const responses = await Promise.all(fetchFilteredTeachersPromises);

      const allFilteredTeachers = responses.flatMap((response) => {
        const entries = Object.entries(response.data);
        const teachersArray = entries.map((entry) => {
          return entry[1];
        });
        return teachersArray;
      }) as Teachers;

      const onlyNeededTeachers = allFilteredTeachers.filter((teacher) => {
        let priceInRange = true;
        if (filters.price) {
          priceInRange = teacher.price_per_hour === Number(filters.price);
        }

        let levelMatches = true;
        if (filters.level) {
          levelMatches = teacher.levels[filters.level];
        }

        let languageMatches = true;
        if (filters.language) {
          languageMatches = teacher.languages[filters.language];
        }

        return priceInRange && levelMatches && languageMatches;
      });

      const nonRepeatedNeededTeachers = onlyNeededTeachers.filter(
        (teacher, index, array) =>
          array.findIndex((t) => t.id === teacher.id) === index
      );

      if (!nonRepeatedNeededTeachers.length) {
        return thunkAPI.rejectWithValue(
          "No items found matching your search query"
        );
      }
      const payload: FilteredTeachersPayloadType = {
        teachers: nonRepeatedNeededTeachers,
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
