import { RootState } from "../store";

type SelectIsLoading = (state: RootState) => boolean;

export const selectIsLoading: SelectIsLoading = (state) => state.user.isLoading;
