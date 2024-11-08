import { SelectBoolean, SelectString } from "../types";

export const selectIsLoading: SelectString = (state) => state.user.isLoading;
export const selectIsLoggedIn: SelectBoolean = (state) => state.user.isLoggedIn;
export const selectUserId: SelectString = (state) => state.user.user.userId;
export const selectUserName: SelectString = (state) => state.user.user.name;
export const selectUserEmail: SelectString = (state) => state.user.user.email;
