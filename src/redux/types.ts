import { RootState } from "./store";

type FetchingData = {
  isLoading: boolean;
  error: Error | string | null;
};

export type SelectBoolean = (state: RootState) => boolean;
export type SelectString = (state: RootState) => string;