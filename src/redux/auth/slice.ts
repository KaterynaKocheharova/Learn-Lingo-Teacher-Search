import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "./operations";

import { type UserSlice, RegisterPayload, RefreshUserPayload } from "./types";
import { type FetchingData } from "../types";

const initialState: UserSlice = {
  user: {
    name: "",
    email: "",
    userId: "",
  },
  isLoggedIn: false,
  error: null,
  isLoading: "",
};

export const handleError = <
  T extends { isLoading: boolean | string; error: FetchingData["error"] }
>(
  state: T,
  action: PayloadAction<unknown>
) => {
  state.isLoading = false;

  if (action.payload instanceof Error) {
    state.error = action.payload;
  } else {
    state.error = "Unknown error";
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = "registration-in-progress";
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<RegisterPayload>) => {
          state.isLoggedIn = true;
          state.isLoading = "";
          state.error = null;
          state.user.userId = action.payload.userId;
        }
      )
      .addCase(registerUser.rejected, handleError<UserSlice>)
      .addCase(loginUser.pending, (state) => {
        state.isLoading = "logining-in-progress";
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.isLoading = "";
        state.error = null;
      })
      .addCase(loginUser.rejected, handleError<UserSlice>)
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = "logout-in-progress";
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {
          name: "",
          email: "",
          userId: "",
        };
        state.isLoading = "";
        state.error = null;
      })
      .addCase(logoutUser.rejected, handleError<UserSlice>);
  },
  reducers: {
    refreshUser: (state, action: PayloadAction<RefreshUserPayload>) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.userId = action.payload.userId;
    },
  },
});

export default userSlice.reducer;
export const { refreshUser } = userSlice.actions;
