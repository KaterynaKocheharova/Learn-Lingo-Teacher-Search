import { RootState } from "./store";

export type FetchingData = {
  isLoading: boolean | string;
  error: Error | string | null;
};

export type SelectBoolean = (state: RootState) => boolean;
export type SelectString = (state: RootState) => string;