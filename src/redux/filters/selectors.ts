import { RootState } from "../store";
import { type Filters } from "./slice";

type SelectFilters = (state: RootState) => Partial<Filters["filters"]>;

export const selectFilters: SelectFilters = (state) => state.filters.filters;
