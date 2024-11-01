import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type Teachers } from "./types.js";
import { type TeachersPayloadType } from "./slice.js";
import { type Teacher } from "./types.js";
import { type Filters } from "../filters/slice.js";

export type QueryDetails = {
  startKey?: string;
  isFirstBatch?: boolean;
  isFiltered?: boolean;
};

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (queryDetails: QueryDetails, thunkAPI) => {
    const { startKey, isFirstBatch = false, isFiltered = false } = queryDetails;

    const limit = 4;
    let url;

    if (isFirstBatch) {
      url = `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="$key"&limitToFirst=${limit}`;
    }

    if (!isFirstBatch) {
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
        isFiltered: isFiltered ? true : false,
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

export type FilterQueryDetails = {
  filters: Partial<Filters["filters"]>;
};

export const fetchFilteredTeachers = createAsyncThunk(
  "teachers/fetchFilteredTeachers",
  async (queryDetails: FilterQueryDetails, thunkAPI) => {
    const { filters } = queryDetails;
    console.log(filters);

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
      // const startPrice = Number(filters.price);
      // const endPrice = String(Number(filters.price) + 5);
      // fetchFilteredTeachersPromises.push(
      //   await axios.get(
      //     `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="price_per_hour"&startAt=${startPrice}&endAt=${endPrice}`
      //   )
      // );
      fetchFilteredTeachersPromises.push(
        await axios.get(
          `https://learnlingo-a826c-default-rtdb.firebaseio.com/teachers.json?orderBy="price_per_hour"&equalTo=${Number(filters.price)}`
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
          priceInRange =
            Number(teacher.price_per_hour) >= Number(filters.price) &&
            Number(teacher.price_per_hour) <= Number(filters.price) + 5;
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
      const payload: TeachersPayloadType = {
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
