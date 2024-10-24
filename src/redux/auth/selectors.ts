import { RootState } from "../store";

type SelectBoolean = (state: RootState) => boolean;
type SelectString = (state: RootState) => string;

export const selectIsLoading: SelectString = (state) => state.user.isLoading;
export const selectIsLoggedIn: SelectBoolean = (state) => state.user.isLoggedIn;
export const selectUserId: SelectString = (state) => state.user.user.userId;
