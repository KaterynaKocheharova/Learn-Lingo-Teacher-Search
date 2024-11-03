import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";

export type Filters = {
  filters: {
    language: string;
    level: string;
    price: string;
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
    price: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    addFilter: (state, action: PayloadAction<FiltersPayloadType>) => {
      const { filters } = action.payload;

      if (filters.price) {
        state.filters.price = filters.price;
      }
      if (filters.language) {
        state.filters.language = filters.language;
      }
      if (filters.level) {
        state.filters.level = filters.level;
      }
    },
    clearFilters: (state) => {
      state.filters.price = "";
      state.filters.language = "";
      state.filters.level = "";
    },
    clearFilter: (
      state,
      action: PayloadAction<"level" | "language" | "price">
    ) => {
      state.filters[action.payload] = "";
    },
  },
});

export const { addFilter, clearFilters, clearFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
