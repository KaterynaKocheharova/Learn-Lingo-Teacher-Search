import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";

export type Filters = {
  filters: {
    language: string;
    level: string;
    from: string;
    to: string;
  };
};

type FiltersInitialState = Filters;

type FiltersPayloadType = {
  filters: Partial<Filters["filters"]>;
};

const filtersInitialState: FiltersInitialState = {
  filters: {
    language: "",
    level: "",
    from: "",
    to: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    addFilter: (state, action: PayloadAction<FiltersPayloadType>) => {
      const { filters } = action.payload;

      if (filters.from) {
        state.filters.from = filters.from;
      }
      if (filters.to) {
        state.filters.to = filters.to;
      }

      if (filters.from) {
        state.filters.from = filters.from;
      }
      if (filters.language) {
        state.filters.language = filters.language;
      }
      if (filters.level) {
        state.filters.level = filters.level;
      }
    },
    clearFilters: (state) => {
      state.filters.from = "";
      state.filters.to = "";
      state.filters.language = "";
      state.filters.level = "";
    },
    clearFilter: (
      state,
      action: PayloadAction<"level" | "language" | "from" | "to">
    ) => {
      state.filters[action.payload] = "";
    },
  },
});

export const { addFilter, clearFilters, clearFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
